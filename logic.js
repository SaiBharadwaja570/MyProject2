let cnum = Math.floor(Math.random()*100)+1;
let attempt = 0;
let attemptData = document.getElementById("Attempt");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("submit");
let resBtn = document.getElementById("resBtn");
let message = document.getElementById("msg");

function check(){
    let usernums = parseInt(userinp.value);
    if(cnum == usernums){
        message.innerHTML = "Congratulations! You have guessed the number!"
        message.style.color="green";
        resBtn.style.display="black"
    }
    else if(cnum < usernums){
        message.innerHTML = "Too high! Try again ";
        message.style.color = "red";
    }
    else{
        message.innerHTML = "Too Low! Try again ";
        message.style.color = "red";
    }
    attempt++;
    attemptData.innerHTML=attempt;
    setTimeout(() => {
        userinp.value = null;
        message.innerHTML='';
    }, 3000)
}
function restart(){
     cnum = Math.floor(Math.random()*100)+1;
 attempt = 0;

 attemptData = document.getElementById("Attempt");
 userinp = document.getElementById("inp");
 subBtn = document.getElementById("submit")
 resBtn = document.getElementById("resBtn")
 message = document.getElementById("msg")
}
subBtn.addEventListener("click", check);
resBtn.addEventListener("click", restart);




































