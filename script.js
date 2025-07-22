let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset");
let newgame=document.querySelector("#new");
let msgcont=document.querySelector(".msgcont");
let msg=document.querySelector("#msg")

//alternate turns

let turn0=true;//playerX,player 0
// let arr=["apple","banana","litchi"];
//aray k andr array 2d array inka 0th index check krna h toh aaray aayega

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){//player 0
            box.innerText="O";
            turn0=false;
            box.style.color="green";
        }
        else{//playerx
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
})

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
};

const showwinner=(winner)=>{
    msg.innerHTML=`Congratulations ,winner is ${winner}`;
    msgcont.classList.remove("hide");
    disablebox();
};

const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val);
            }
        }
    }
}

const resetgame=()=>{
    turn0=true;
    enablebox();
    msgcont.classList.add("hide");
}

newgame.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);
