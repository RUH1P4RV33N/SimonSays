let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2");
let btns=["red","orange","purple","green"];
let started=false;
let level=0;

function checkAns(index){
    //let index=level-1;
    if(gameSeq[index]===userSeq[index])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerText=`Game Over!!\nYour score was ${level}\nPress any key to start again.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        }
        ,250)
        reset();
    }
}

document.addEventListener("keypress",
    function(){
        if(started==false)
        {
            console.log("game started");
            started=true;
            levelup();
        }
    }
);

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function()
{
    btn.classList.remove("flash");
},250);
}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`

    let randomindx=Math.floor(Math.random()*4);
    let randomcolor=btns[randomindx];
    let randombtn=document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);
    btnFlash(randombtn);
}

function btnpress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}