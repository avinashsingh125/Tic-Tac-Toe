let btn=document.querySelectorAll(".btn");
let reset=document.querySelector(".reset");
let turn=true;
const winpattern=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
btn.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("box was clicked");
  })
  if(turn){
    box.innerText="O";
    turn=false;
  }
  else{
    box.innerText="X";
    turn=true;
  }
})
