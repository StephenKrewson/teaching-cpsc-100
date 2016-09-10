<?php
    // make db connection, get functions
    require("../includes/config.php");

    // if user reached page via GET (via link or redirect)
    if ($_SERVER["REQUEST_METHOD"] == "GET")
    {
        // else render form for selling stock
        render("withdraw_form.php", ["title" => "Lose $$$"]);
    }
    else if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        // Ensure non-negative integer
        if (preg_match("/^\d+$/", $_POST["dollars"]) != true)
        {
            apologize("Please enter a non-negative integer.");
        }

        $rows = CS50::query("SELECT cash from users WHERE id = ?", $_SESSION["id"]);
        $balance = $rows[0]["cash"];

        if ($_POST["dollars"] > $balance)
        {
            $balance = 0;
        }
        else
        {
            $balance = $balance - $_POST["dollars"];
        } 

        // Increase their money
        $sql_update = CS50::query(
            "UPDATE users SET cash = ? WHERE id = ?",
            $balance, $_SESSION["id"]
        );
        
        // Error check the balance update
        if ($sql_update === false)
        {
            apologize("Balance could not be updated.");
        }
        
        // remember in the history
        CS50::query("INSERT INTO history (user_id, type, symbol, shares, price, datetime)
            VALUES(?, 'WITHDRAW', ?, ?, ?, NOW())", $_SESSION["id"], NULL, NULL, $_POST["dollars"]);

        // Redirect to the index (balance will be updated)
        redirect("index.php");
    }
?>
