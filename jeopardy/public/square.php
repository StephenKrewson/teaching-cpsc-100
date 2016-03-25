<!DOCTYPE html>

<html>
    <head>
        <!-- jQuery, from https://developers.google.com/speed/libraries/#jquery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

        <!-- our js -->
        <script src="questions.js"></script>
        <script>
            var cat = <?= $_GET["cat"]; ?>;
            var q = <?= $_GET["q"]; ?>;
            
            $(function() {
                $("#question").html(info[cat].questions[q].q);
                $("#answer").html("<button type='button' class='btn btn-default'>Show Answer</button>");
                $("button").click(function() {
                    $("#answer").html("<p>" + info[cat].questions[q].a + "</p>");
                });
            });
        </script>
        
        <!-- Bootstrap, from http://getbootstrap.com/getting-started/ -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" integrity="sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
        
        <!-- our css -->
        <link href="jeopardy.css" rel="stylesheet" type="text/css">
        
        <!-- favicon -->
        <link rel="icon" href="img/favicon.ico" type="image/x-icon">
        
        <!-- title -->
        <title>CS50 Jeopardy</title>
    </head>
    
    <body>
        <div class="page-header">
            <img class="img-responsive center-block" alt="Jeopardy" src="img/logo.png">
        </div>
        <div class="row">
            <p id="question" class="lead"></p>
            <div id="answer"></div>
        </div>
    </body>
</html>