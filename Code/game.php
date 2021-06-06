<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.typekit.net/tri3onz.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title></title>
    <script>
        window.gm="<?php  echo $_GET["gm"];?>"
    </script>
    <script defer src="game.js"></script>
</head>
<body>
    <div class="container">
        <div class="jumbotron" id="settings"><h4>Settings</h4>
            <hr>
            <div>Sound: <button>(ICON)</button></div>
            <hr>
            <div>Darkmode: <button>(TOGGLE)</button></div>
        </div>
        <div class="center">
            <input type="text" id="input" style="display: none;">
            <button id="button"class="getToChoose gamepadding main-font" onclick="startgame()">Start!</button>
            <div id="output"></div>
        </div>
    </div>
</body>
</html>