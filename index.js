let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset_game");
let newGame = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; 

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const reset_game=()=>{
    turnO=true;
    enableBtns();
    msg-msgContainer.classList.add("hide");
}
btns.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        if(turnO){
            btn.innerText = "O";
            turnO =false;
        }else{
            btn.innerText="X";
            turnO = true;
        }
        btn.disabled=true;
        checkWinner();
    })
})
const disableBtns = () =>{
    for(let btn of btns){
        btn.disabled = true;
    }
}
const enableBtns = () =>{
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText="";
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Congratulations! the winner is  ${winner}`;
    msg-msgContainer.classList.remove("hide");
    disableBtns();
}
const checkWinner = ()=>{
    for(let pattern of winPatterns){
       let pos1Val =  btns[pattern[0]].innerText;
       let pos2Val =  btns[pattern[1]].innerText;
       let pos3Val =  btns[pattern[2]].innerText;

       if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
       }
    }
}
newGame.addEventListener("click",reset_game );
resetBtn.addEventListener("click",reset_game );
