let turnx="true"
let btn= document.querySelectorAll(".box")
let winner= document.querySelector(".winner")

let arr= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let cnt=0;
for(let i=0;i<9;i++){
    btn[i].addEventListener("click",()=>{
        if(turnx==="true"){

            turnx="false";
            btn[i].innerHTML= "X";
            btn[i].disabled=true;
            btn[i].style.backgroundColor="rgb(5, 82, 116)";

            // arrx.push(i);
        }
        else{
            turnx="true";
            btn[i].style.color= "hsl(128, 68%, 62%)";
            btn[i].innerHTML= "O";
            btn[i].disabled=true;
            btn[i].style.backgroundColor="rgb(5, 82, 116)"
            // arro.push(i);
            }
            cnt++;
        checkwin();
        if(cnt>=9 && !checkwin()) {
            // let winner= document.querySelector("winner") 
            winner.innerHTML= "NOBODY WON"
        }

    })

}


let checkwin=()=>{
    for(let i of arr){
        let a= btn[i[0]].innerHTML; 
        let b= btn[i[1]].innerHTML; 
        let c= btn[i[2]].innerHTML; 
        if(a ==="" || b==="" || c==="") continue;
        else if( a===b && b===c) {
            // alert();
            
            winner.innerHTML= `${a}-WON`;
            for(let j of btn){
                j.disabled= true;
                // j.style.backgroundColor="rgb(187, 115, 8)"
            }
            
        }
       

    }
}


