var game = document.getElementById("game");

window.addEventListener("load",function(){
 game.style.visibility="hidden";
})


//test function
function getUsername(){
    console.log("hello");
}

function setpath(x) {

    switch (x) {
        case 1:
            console.log("Zahlen")
            break;
        case 2:
            console.log("Buchstaben");
            break;
            
        default:
            console.log("Buchstaben & Zahlen")
            break;
    }
          window.location.href='game.php';
}

function gamevisibility(z) {
    if(z){
        game.style.visibility="";
        console.log("true");
    }
    else{
        game.style.visibility="hidden";
        console.log("false");
    }
}

 function startgame(){
    addEventListener("click",function () {
        document.getElementById("start").style.visibility="hidden";
        countdown();
        randomgenerator();
        
    });
}
 

//Used for Gamelogik 
var expvalue =1;
var inputvalue =0;



var time =5; // Need for customizing time in settings
function countdown(){
    var timer = setInterval(function(){
    document.querySelector("#game").innerHTML="Hello";
    while(time>0){
        time-=1;
        gamevisibility(true);
    } 
        gamevisibility(false);
        clearInterval(timer);
       
    },1000);
}



//Zahlenmodus
function randomgenerator(){
inputvalue= Math.floor(Math.random()*Math.pow(10,expvalue)+1);
console.log(inputvalue);
}
