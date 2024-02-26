 let userscore=0;
 let compscore=0;

 const choices=document.querySelectorAll(".choice");
 
 const msg=document.querySelector("#msg");
 const userscorepara=document.querySelector("#user-score")
 const compscorepara=document.querySelector("#computer-score")

 const genCompChoice=()=>{
   const option=["rock" , "paper" , "scissor"];
   const randint=Math.floor(Math.random()*3);
   return option[randint];


 }

 let again=document.querySelector(".again");

 again.addEventListener("click" , ()=>{
   userscore=0;
   compscore=0;
   userscorepara.innerText=userscore;
   compscorepara.innerText=compscore;
   msg.innerText="play your turn ";
   
 })
 let mode="dark";

 let btn=document.querySelector(".btn");
 let body=document.querySelector("body")
 btn.addEventListener("click" , ()=>{
   if(mode==="dark"){
      mode="light";
      body.style.backgroundColor="black";
      btn.innerText="light mode";
      body.style.color="white";
   }
   else{
      mode="dark";
      body.style.backgroundColor="white";
      body.style.color="black";
      btn.innerText="dark mode"
   }

 })
 const drowgame=()=>{
   console.log("game droe ho gya hai ")
   msg.innerText="game was draw 😤";
   msg.style.backgroundColor="white"
   msg.style.color="black";
   
 }
 const showWinner=(userwin)=>{
   if(userwin){
      console.log("you win");
      userscore++;
      userscorepara.innerText=userscore;
      msg.innerText="You win 😀";
      msg.style.backgroundColor="green";
      document.querySelector("#msg")



   }
   else{
      console.log("comp win");
      compscore++;
      compscorepara.innerText=compscore
      msg.innerText="computer win 😔";
      msg.style.backgroundColor="red";
      
      
   }

 }
 const palygame=(userchoice)=>{
    console.log("user choice is ", userchoice);
    const compchoice =genCompChoice();
    console.log("comp chois is" , compchoice);
    // genrate computer choice,

    if(userchoice==compchoice){
      // drow
      drowgame();
    }
    else{
      let userwin=true;
      if(userchoice==="rock"){
         userwin=compchoice==="paper" ? false :true;


      }
      else if(userchoice==="paper"){
         userwin=compchoice==="scissor" ? false :true;
      }
      else{
         userwin= compchoice==="rock" ?false :true;
      }
      showWinner(userwin);
    }


 }
 choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userchoice=choice.getAttribute("id");
         
        palygame(userchoice);

    })
 })