let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btns=["button1","button2","button3","button4"]
let h3=document.querySelector("h3")
document.addEventListener("keypress",function() {
    h3.innerText=`Level ${level}`
    if(started===false) {
        console.log("game started")
        started=true;
        levelup(); 
    }
    
})
function btnflash(btn) {
    btn.classList.add("flash")
    setTimeout(function() {
btn.classList.remove("flash");},50)
}
function levelup() {
    userseq=[]
    level++;
    h3.innerText=`Level : ${level}`
    let rand=Math.floor(Math.random()*4)
    let randcolor=btns[rand]
    let btn=document.querySelector(`.${randcolor}`)
    console.log(rand)
    console.log(randcolor)
    console.log(btn)
    gameseq.push(randcolor)
    console.log(gameseq)
    btnflash(btn);
}
function checkans() {
    let index=userseq.length-1;
    if(userseq[index]===gameseq[index]) {
       if(userseq.length===gameseq.length){
        levelup();
       }
    }
    else {
        h3.innerHTML=`Game Over! your score was <b>${level}</b> <br> Press any key to start,`;
        resetGame();
        let body=document.querySelector("body")
        body.style.backgroundColor="red"
        setTimeout(function() {
            body.style.backgroundColor="black"},200)
    }
}
function btnpress() {
    console.log(this)
    let btn=this;
    btnflash(btn);
    usercolor=btn.getAttribute("id")
    console.log(usercolor)
    userseq.push(usercolor);
    checkans();
}
function resetGame() {
    let finalscore=level
    level = 0;
    gameseq = [];
    userseq=[];
    started = false;
    h3.innerHTML=`Game Over! your score was <b>${finalscore}</b> <br> Press any key to start,`;
    
}
let allbtns=document.querySelectorAll(".button")
for(btn of allbtns) {
    btn.addEventListener("click",btnpress)
}