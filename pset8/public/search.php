<?php
    require(__DIR__ . "/../includes/config.php");
    
    // numerically indexed array of places
    $places = [];

    // You MUST supply geo param to use search controller 
    if (!isset($_GET["geo"]))
    {
        http_response_code(400);
        exit;
    }

    // escape user's input
    $geo = urlencode($_GET["geo"]);

    // Handle zip codes differently (N.B. is_int vs. is_numeric)
    if (is_numeric($geo) and strlen($geo) == 5)
    {
        $places = CS50::query("SELECT * FROM places WHERE postal_code = ?", $geo);
    }
    // Non postal_codes (improve on rankings)
    else
    {
        $places = CS50::query("SELECT * FROM places WHERE MATCH (postal_code,place_name,admin_name1,admin_name2,admin_name3) AGAINST (?) LIMIT 50", $geo);
    }

    // output places as JSON (pretty-printed for debugging convenience)
    header("Content-type: application/json");
    print(json_encode($places, JSON_PRETTY_PRINT));
?>
