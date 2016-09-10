<!DOCTYPE html>

<html>
    <head>
        <title>POST-ing</title>
    </head>
    <body>
        <?php if (!empty($_POST["name"])): ?>
            hello, <?= htmlspecialchars($_POST["name"]) ?>
        <?php else: ?>
            hello, world
        <?php endif ?>

        <h3>Debug </h3>
        <?php
            print_r($_POST);
        ?>
    </body>
</html>
