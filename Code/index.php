<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.typekit.net/tri3onz.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>WORKING-MEMORY-TRAINER</title>
</head>
<body>
    <div class="container center">
        <div class="settings"></div>
        <h1 class="main-font">WORKING-MEMORY-TRAINER</h1>
        <form action="choose.html" method="get">
            <input type="text" placeholder="Username" id="username">
            <br>
            <button class="getToChoose main-font"onclick="getUsername()" class="main-font">Start!</button>
        </form>
        <script src="logic.js"></script>
    </div>
    
</body>
</html>