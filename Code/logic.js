function getUsername(){
    console.log("hello");
}



function setpath() {
      window.location.href='game.php';
}

var game = document.getElementById("game");
game.style.visibility="hidden";

 function startgame(){
    addEventListener("click",function () {
        document.getElementById("start").style.visibility="hidden";
        console.log("Started"); 
        game.style.visibility="";
      
    });
    
}





