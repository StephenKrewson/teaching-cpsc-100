/**
 * scripts.js
 *
 * David J. Malan
 * malan@harvard.edu
 *
 * Global JavaScript.
 */

// Google Map
var map;

// markers for map
var markers = [];

// info window
var info = new google.maps.InfoWindow();

// execute when the DOM is fully loaded
$(function() {

    // styles for map
    // https://developers.google.com/maps/documentation/javascript/styling
    var styles = [

        // hide Google's labels
        {
            featureType: "all",
            elementType: "labels",
            stylers: [
                {visibility: "off"}
            ]
        },

        // hide roads
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {visibility: "off"}
            ]
        }

    ];

    // options for map
    // https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var options = {
        center: {lat: 41.3184, lng: -72.9318}, // The Haven
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        maxZoom: 14,
        panControl: true,
        styles: styles,
        zoom: 13,
        zoomControl: true
    };

    // get DOM node in which map will be instantiated
    var canvas = $("#map-canvas").get(0);

    // instantiate map
    map = new google.maps.Map(canvas, options);

    // configure UI once Google Map is idle (i.e., loaded)
    google.maps.event.addListenerOnce(map, "idle", configure);

});

/**
 * Adds marker for place to map.
 */
function addMarker(place)
{
    /*
    // instantiate marker
    var marker = new MarkerWithLabel({
        icon: "https://maps.google.com/mapfiles/kml/pal2/icon31.png", // http://www.lass.it/Web/viewer.aspx?id=4
        labelAnchor: new google.maps.Point(22, 0),
        labelClass: "label",
        labelContent: place.place_name + ", " + place.admin_name1,
        position: new google.maps.LatLng(place.latitude, place.longitude),
        map: map
    });

    // listen for clicks on marker
    google.maps.event.addListener(marker, "click", function() {

        // show ajax indicator
        showInfo(marker);

        // get articles for place (asynchronously)
        $.getJSON("articles.php", {geo: place.postal_code})
        .done(function(data, textStatus, jqXHR) {

            // if no data, no news
            if (data.length === 0)
            {
                showInfo(marker, "Slow news day!");
            }

            // else build unordered list of links to articles
            else
            {
                // start ul 
                var ul = "<ul>";

                // template for li
                var template = _.template("<li><a href='<%- link %>' target='_blank'><%- title %></a></li>");

                // iterate over articles
                for (var i = 0; i < data.length; i++)
                {
                    // add li to ul
                    ul += template({link: data[i].link, title: data[i].title});
                }

                // end ul 
                ul += "</ul>";

                // show info window at marker with content
                showInfo(marker, ul);
            }
        })
        .fail(function(jqXHR, textStatus, errorThrown) {

            // log error to browser's console
            console.log(errorThrown.toString());
        });
    });

    // remember marker (so we can remove it later)
    markers.push(marker);
    */
    
    // Remember JSON comes in as string...
    var myLatLng = {lat: parseFloat(place.latitude), lng: parseFloat(place.longitude)};

    // Use the helper class from label library
    var marker = new MarkerWithLabel({
        position: myLatLng,
        draggable: false,
        raiseOnDrag: true,
        map: map,
        labelContent: place.place_name
    });

    // we need to hit the articles endpoint
    var parameters = {
        geo: place.postal_code
    };

    // Store the JSON array of articles
    var content = [];

    $.getJSON("articles.php", parameters)
    .done(function(data, textStatus, jqXHR) {
        $.each(data, function(key, val) {
            content.push("<li>" + "<a href='" + val.link + "'>" + val.title + "</a></li>");
        });
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log(errorThrown.toString());
    });

    // https://developers.google.com/maps/documentation/javascript/3.exp/reference
    google.maps.event.addListener(marker, "click", function () {
        showInfo(marker, content.join(""));
    });
    
    // Remember so we can clear
    markers.push(marker);
}

/**
 * Configures application.
 */
function configure()
{
    // update UI after map has been dragged
    google.maps.event.addListener(map, "dragend", function() {
        update();
    });

    // update UI after zoom level changes
    google.maps.event.addListener(map, "zoom_changed", function() {
        update();
    });

    // remove markers whilst dragging
    google.maps.event.addListener(map, "dragstart", function() {
        removeMarkers();
    });

    // configure typeahead
    // https://github.com/twitter/typeahead.js/blob/master/doc/jquery_typeahead.md
    $("#q").typeahead({
        autoselect: true,
        highlight: false,
        minLength: 1
    },
    {
        source: search,
        templates: {
            empty: "no places found yet",
            // Per spec, '%-' ensures HTML special chars will be escaped
            suggestion: _.template("<p><%- place_name %>, <%- admin_name1 %> <%- postal_code %></p>")
        }
    });

    // re-center map after place is selected from drop-down
    $("#q").on("typeahead:selected", function(eventObject, suggestion, name) {

        // ensure coordinates are numbers
        var latitude = (_.isNumber(suggestion.latitude)) ? suggestion.latitude : parseFloat(suggestion.latitude);
        var longitude = (_.isNumber(suggestion.longitude)) ? suggestion.longitude : parseFloat(suggestion.longitude);

        // set map's center
        map.setCenter({lat: latitude, lng: longitude});

        // update UI
        update();
    });

    // hide info window when text box has focus
    $("#q").focus(function(eventData) {
        hideInfo();
    });

    // re-enable ctrl- and right-clicking (and thus Inspect Element) on Google Map
    // https://chrome.google.com/webstore/detail/allow-right-click/hompjdfbfmmmgflfjdlnkohcplmboaeo?hl=en
    document.addEventListener("contextmenu", function(event) {
        event.returnValue = true; 
        event.stopPropagation && event.stopPropagation(); 
        event.cancelBubble && event.cancelBubble();
    }, true);

    // update UI
    update();

    // give focus to text box
    $("#q").focus();
}

/**
 * Hides info window.
 */
function hideInfo()
{
    info.close();
}

/**
 * Removes markers from map.
 */
function removeMarkers()
{
    /*
    for (var i = 0; i < markers.length; i++)
    {
        markers[i].setMap(null);
    }
    markers.length = 0;
    */
    
    for (var i = 0; i < markers.length; i++)
    {
        markers[i].setMap(null);
    }
}

/**
 * Searches database for typeahead's suggestions.
 */
function search(query, cb)
{
    // get places matching query (asynchronously)
    var parameters = {
        geo: query
    };

    console.log(parameters);

    $.getJSON("search.php", parameters)
    .done(function(data, textStatus, jqXHR) {
     
        // call typeahead's callback with search results (i.e., places)
        cb(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {

        // log error to browser's console
        console.log(errorThrown.toString());

        // call typeahead's callback with no results
        cb([]);
    });
}

/**
 * Shows info window at marker with content.
 */
function showInfo(marker, content)
{
    // start div
    var div = "<div id='info'>";
    if (typeof(content) === "undefined")
    {
        // http://www.ajaxload.info/
        div += "<img alt='loading' src='img/ajax-loader.gif'/>";
    }
    else
    {
        div += content;
    }

    // end div
    div += "</div>";

    // set info window's content
    info.setContent(div);

    // open info window (if not already open)
    info.open(map, marker);
}

/**
 * Updates UI's markers.
 */
function update() 
{
    // get map's bounds
    var bounds = map.getBounds();
    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();

    // get places within bounds (asynchronously)
    var parameters = {
        ne: ne.lat() + "," + ne.lng(),
        q: $("#q").val(),
        sw: sw.lat() + "," + sw.lng()
    };
    $.getJSON("update.php", parameters)
    .done(function(data, textStatus, jqXHR) {

       // remove old markers from map
       removeMarkers();

       // add new markers to map
       for (var i = 0; i < data.length; i++)
       {
           addMarker(data[i]);
       }
    })
    .fail(function(jqXHR, textStatus, errorThrown) {

        // log error to browser's console
        console.log(errorThrown.toString());
    });
};