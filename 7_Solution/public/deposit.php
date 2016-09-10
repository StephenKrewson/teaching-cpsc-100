<?php
    // make db connection, get functions
    require("../includes/config.php");

    // if user reached page via GET (via link or redirect)
    if ($_SERVER["REQUEST_METHOD"] == "GET")
    {
        // else render form for selling stock
        render("deposit_form.php", ["title" => "Give yourself $$$"]);
    }
    else if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // Ensure non-negative integer
        if (preg_match("/^\d+$/", $_POST["dollars"]) != true)
        {
            apologize("Please enter a non-negative integer.");
        }

        // Increase their money
        $sql_update = CS50::query(
            "UPDATE users SET cash = cash + ? WHERE id = ?",
            $_POST["dollars"], $_SESSION["id"]
        );
        
        // Error check the balance update
        if ($sql_update === false)
        {
            apologize("Balance could not be updated.");
        }

        // update history
        CS50::query("INSERT INTO history (user_id, type, symbol, shares, price, datetime)
            VALUES(?, 'DEPOSIT', ?, ?, ?, NOW())", $_SESSION["id"], NULL, NULL, $_POST["dollars"]);

        // Redirect to the index (balance will be updated)
        redirect("index.php");
    }
?>
