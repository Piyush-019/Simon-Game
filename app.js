let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Started");
        started = true;

        levelup();
    }
})

function gameflash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash")
    }, 200)
}

function userflash(btn) {
    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 200)
}

function levelup() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randBtn);
}


function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
    setTimeout(levelup,500);
    }
}
else {
    h2.innerHTML=`Game Over! Youe score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    }, 150);
    reset();
}
}

function btnpress(){
    let btn= this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}


let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}



function reset(){
    started=0;
    gameseq=[];
    userseq=[];
    level=0;
}