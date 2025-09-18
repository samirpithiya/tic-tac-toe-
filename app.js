 let boxs=document.querySelectorAll(".box");
 let resetbtn=document.querySelector("#reset-btn");
 let newgamebtn=document.querySelector("#new-btn");
 let msgcontainer=document.querySelector(".msg-container");
 let msg=document.querySelector("#msg");


 let turno=true;//playerX,playero
 let count=0;//to track draw

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


const resetgame = () =>{
    turno =true;
    count=0;
    enableboxs();
    msgcontainer.classList.add("hide");
}

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
    if(turno)
    {
        //playero
        box.innerText="O";
        //box.style.color="White";
        turno=false;
    }
    else
    {
        //playerx
        box.innerText="X"; 
        box.style.color="green";
        turno=true;
    }
    box.disabled=true;
    count++;

    let iswinner=checkWinner();
     if (count === 9 && !iswinner) {
      gameDraw();
    }
    });
});

const gameDraw=() =>{
    msg.innerText=`Game was a Draw`;
    msgcontainer.classList.remove("hide");
    disableboxs();
}

const disableboxs = ()=>{
    for(let box of boxs)
    {
        box.disabled=true;
    }
}

const enableboxs = ()=>{
    for(let box of boxs)
    {
        box.disabled=false;
        box.innerText="";
    }
}



const showwinner =(winner) =>{
    msg.innerText=`Congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");  
    disableboxs();
}
const checkWinner =() =>{
    for(let pattern of winpatterns)
    {
        let pos1val =boxs[pattern[0]].innerText;
        let pos2val =boxs[pattern[1]].innerText;
        let pos3val =boxs[pattern[2]].innerText;
    
    if(pos1val != "" && pos2val != "" && pos3val != "" )
    {
        if(pos1val === pos2val && pos2val === pos3val)
        {
            showwinner(pos1val);
            return true;
        }
    }
  }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
