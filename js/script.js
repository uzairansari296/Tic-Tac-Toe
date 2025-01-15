console.log("Welcome To Tic Tac Toe");
let music=new Audio("music.mp3");
let audioTurn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");

let turn="X";
let isgameover=false;

// Function for change Turn
const changeTurn = ()=>{
    return turn==="X"?"O":"X";
}

// Function for check win
const checkWin = () =>{
    let boxText=document.getElementsByClassName('boxText');
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e=>{
       if((boxText[e[0]].innerText===boxText[e[1]].innerText) && (boxText[e[1]].innerText===boxText[e[2]].innerText) && (boxText[e[0]].innerText!==''))
       {
          document.querySelector('.info').innerText=boxText[e[0]].innerText + " WON🏆";
          isgameover=true;
          document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="200px";
       }
    })
}

// Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
         if(boxText.innerText===''){
            boxText.innerText =turn;
            turn =changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText="Turn for = " +  turn;
            }
         }
    })
})

// //RESET button logic
reset.addEventListener('click',()=>{
    let boxText=document.getElementsByClassName("boxText");
    Array.from(boxText).forEach(element =>{
        element.innerText="";
        turn="X";
        isgameover=false;
        if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText="Turn for = " +  turn;
                document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width="0";
            }
    })
}) 