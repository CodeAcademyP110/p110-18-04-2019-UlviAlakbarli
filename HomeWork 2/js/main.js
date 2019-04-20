"use strict";
let bir=document.querySelector(".div-1");
let iki=document.querySelector(".div-2");
let uc=document.querySelectorAll(".div-3");
let bt=document.querySelector("button");
let row=document.querySelector(".row");
let diva=document.querySelectorAll(".diva");

// let ucu=row.children[3]
bt.onclick=function(){
    [...uc].forEach(
        function(dl){
            dl.style.opacity="0"
            setTimeout(function(){
                dl.style.order="-1";
            },2500)
          
        }
    )
     
    //uc.style.order="0"
    //uc.style.opacity="0";
   // row.insertBefore(ucu ,row.childNodes[2]);
   // uc.style.opacity="1";
    // iki.style.backgroundColor="yellow";
    // let umimi="";
    // let inearr=[];
    // diva.forEach(
        
    //     function(dil){
    //         let dilt=dil.innerText;
    //         inearr.push(dilt);
    //         inearr=inearr.sort();
            
            
    //        // umimi=umimi+dilt;
    //         console.log(inearr);


    //     }
    //)
    // let inet=[...diva];
    // console.log(innet);
    


    
 }