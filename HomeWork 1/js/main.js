"use strict";
let navAllLi=document.querySelectorAll(".nav-m li");
let navOrderAllLi=document.querySelectorAll(".nav-o li");
let posLi=document.querySelectorAll(".nav-m .li-pos");
let item=document.querySelectorAll(".item");
let liAllp=document.querySelector(".nav-m .li-all-pos");
let asc=document.querySelector(".asc");
let desc=document.querySelector(".desc");
let ordIndex=0;

//NAV
liAllp.addEventListener("click",function(){
    [...item].forEach(it=>it.classList.remove("d-none"));
    
});
[...navAllLi].forEach(
    function(li){
        li.onclick=function(){
           document.querySelector(".nav-m .active-li").classList.remove("active-li");
           li.classList.add("active-li");
        }
    }
);

[...posLi].forEach(function(li){
    let pos=li.getAttribute("pos");
    let pos2=pos;
    li.addEventListener("click", function(){ 
           
           [...item].forEach(it=>it.classList.remove("d-none"));
           [...item].forEach(it=>it.classList.remove("d-block"));
           [...item].forEach(it=>it.classList.add("d-none"));
           [...document.querySelectorAll(`.item[pos="${pos}"]`)].forEach(it=>it.classList.add("d-block"));
           [...document.querySelectorAll(`.item[pos2="${pos2}"]`)].forEach(it=>it.classList.add("d-block"));
              }
                                                    )   }  );

//ORDER ASC DESC
[...navOrderAllLi].forEach(
    function(li){
        li.onclick=function(){
           document.querySelector(".nav-o .active-li").classList.remove("active-li");
           li.classList.add("active-li");
           
        }
    }
)

//ORDER ASC
asc.addEventListener("click",function(){
    ordIndex=0;
    [...item].forEach(
        function(it){
           
             it.style.order=`${ordIndex}`;
       }
    )
})

//ORDER DESC
desc.addEventListener("click",function(){
    ordIndex=0;
    [...item].forEach(
        function(it){
             it.style.order=`${ordIndex}`;
             ordIndex--;
        }
    )
})