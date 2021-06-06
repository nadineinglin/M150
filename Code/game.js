var output = document.getElementById("output");
var input = document.getElementById("input");
var button = document.getElementById("button");
var settings = document.getElementById("settings");
var score = -1;
var istyping = true;

function startgame() {
    console.log("start");
    button.onclick = continueGame;
    button.innerText="submit";
    continueGame()
}

function continueGame() {
    if(istyping){
        score++;
        var text= "";
        if (window.gm=="z"){
            for (var i =0; i < score + 1;i++){
               text += Math.round(Math.random()*9).toString() ;
            }
        }
        console.log(text)
        output.innerText=text;
        output.style.display="";
        button.style.display = "none"
        settings.style.display="none"
        input.style.display="none";
        setTimeout(function () {
            output.style.display="none";
            button.style.display = ""
            input.style.display = ""
        }, 3000);
        istyping = false
    }
    else {
        var failed =0;
        if (input.value == output.innerText) {
            istyping = true;
        }
        else{
            if(failed ==3){
                button.onclick= window.location="highscore.php";
            }
            else{
                failed++;
                console.log("try again");
            }
            console.log("u ded", output.innerText)
        }

    }
}