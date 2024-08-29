let boxes= document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#new");
let newgame2=document.querySelector("#new2");
let msgcon=document.querySelector(".msg-con");
let msg=document.querySelector("#msg");
let draw=document.querySelector(".draw");
let drawmsg=document.querySelector("#drawmsg");

//VALUE
let turn0=true;
let count=0;
//WINING PATTREN
const winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];


//ADD ALETNATE SIGNS
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    console.log("box was clicked");

    if (turn0 ){//player0
    box.style.color="black";
    box.innerText="0";
    turn0=false;
    }
        else
{ //player1
    box.style.color="blue";
    box.innerText="X";
    turn0=true;
    
}
count=count+1;
box.disabled=true;
let iswinner=checkWinner();
if(count==9&&!iswinner){//also need to add the condtition of not winner
matchdraw();
}
});
});

//TO RESET GAME
const resetgame=()=>
{
    turn0=true;
    count=0;
    enableboxes();
    msgcon.classList.add("hide");
    draw.classList.add("hide");

};


//TO DIABLE BOXES AFTER WINNING
const disableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

//TO ENABLE BOXES FOR NEW GAME
const enableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
//TO SHOW WINNER
const showwin=(winner)=>{

    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableboxes();
}
//INCASE MATCH DRAW

const matchdraw=()=>{
    draw.classList.remove("hide");
    drawmsg.innerText=`Match Draw, No Winner`;
    disableboxes();
}
newgame2.addEventListener('click', () => {
    console.log("New Game 2 button was clicked!");
    resetgame();
});



//TO CHECK THE WINNERS
const checkWinner =()=>
{
    for (pattern of winpat){
       //ACESSING THE POSITIONS
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
if(pos1!==""&& pos2 !==""&& pos3 !==""){
    if(pos1==pos2 && pos2==pos3){
        // console.log("winner",pos1);
        //for delay
        setTimeout(()=>showwin(pos1), 500);
        return true;
    
    }}
    }
};

// newgame.addEventListener("click",resetgame);
// newgame.forEach((button) => {
    // console.log('Attaching event listener to button:', button);   Debugging line
    newgame.addEventListener('click',resetgame);
// });

reset.addEventListener("click",resetgame);

