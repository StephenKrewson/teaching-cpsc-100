/* global info */
/* global num_cat */
/* global num_q */

/*
 * index.js
 *
 * CS50
 * Fall 2015
 *
 * Loads the jeopardy board and more!
 */

$(function() {
    // load the board's HTML at the start
    var html = "<tr>";
    
    // titles for each category
    $.each(info, function(key, value) {
        html += "<th>" + value.category + "</th>";
    });
    
    html += "</tr>";
    
    // buttons for each question
    for (var i = 0; i < num_q; i++)
    {
        html += "<tr>";
        for (var j = 0; j < num_cat; j++)
            html += "<td><button type='button' class='btn btn-default' data-cat='" + j + "' data-q='" + i + "'>" + (i + 1) + "00</button></td>";
        html += "</tr>";
    }

    $("#board").html(html);
    
    // when a square is chosen
    $("button").click(function() {
       var cat = $(this).attr("data-cat");
       var q = $(this).attr("data-q");
       
       // open the chosen square in a new window
       // ha! kind of a hack, JSON hirschtable! (this is what gets the GET passed in)
       window.open("https://stephen-cs50-swk2.cs50.io/square.php?cat=" + cat + "&q=" + q);
       
       // remove button from square
       $(this).attr("disabled", "disabled");
    });
});
