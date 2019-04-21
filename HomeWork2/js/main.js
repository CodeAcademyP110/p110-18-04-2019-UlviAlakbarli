"use strict";
window.onload=function(){
    let input=document.querySelector(".input");
    let droparea=document.querySelector(".drop-area");
    let iconUpload=document.querySelector(".icon-upload");
    let imageGallery=document.querySelector(".image-gallery");
    let musicGallery=document.querySelector(".music-gallery");
    let videoGallery=document.querySelector(".video-gallery");
    let info=document.querySelector(".info")
    let sumFileSize=0;
    let sumimagenumber=0;
    let sumvideonumber=0;
    let summusicnumber=0;
    iconUpload.onclick=function(){
        input.click();
    };
    
     input.onchange=function(e){
         transfer([...e.target.files]);
     };
     droparea.ondragover=function(e){
         e.preventDefault();
     }
     droparea.ondrop=function(e){
         e.preventDefault();
         transfer([...e.dataTransfer.files]);
     };


    function transfer (files){
        files.forEach(
                function(file){
                    sumFileSize=sumFileSize+file.size/1024/1024;
                      if(file.type.match("image/*")){
                         let reader=new FileReader;
                         sumimagenumber++;
                         
                         reader.onloadend=function(rd){
                             let image=document.createElement("img");
                             image.src=rd.target.result;
                             imageGallery.appendChild(image)

                         }
                         reader.readAsDataURL(file);
                      }
                      if(file.type.match("audio/*")){
                          summusicnumber++;
                         let music=document.createElement("div");
                         let micon=document.createElement("i");
                         let mspan=document.createElement("span");
                         music.classList.add("music");
                         micon.classList.add("fas","fa-music","mr-2");
                         mspan.innerText=file.name;
                         music.appendChild(micon);
                         music.appendChild(mspan);
                         musicGallery.appendChild(music);

                     };
                     if(file.type.match("video/*")){
                         sumvideonumber++;
                         let video=document.createElement("div");
                         let vicon=document.createElement("i");
                         let vspan=document.createElement("span");
                         video.classList.add("music");
                         vicon.classList.add("fas","fa-video","mr-2");
                         vspan.innerText=file.name;
                         video.appendChild(vicon);
                         video.appendChild(vspan);
                         videoGallery.appendChild(video);

                     }
                     
                     

                }
        )

        if(sumimagenumber!==0){
         imageGallery.firstElementChild.classList.remove("d-none");
         sumimagenumber=sumimagenumber+" eded sekil,"
     }
     if(summusicnumber!==0){
         musicGallery.firstElementChild.classList.remove("d-none");
         summusicnumber=summusicnumber+" eded musiqi,"
     }
     if(sumvideonumber!==0){
         videoGallery.firstElementChild.classList.remove("d-none");
         sumvideonumber=sumvideonumber+" eded video."

     }


     if(sumimagenumber==0){
         sumimagenumber="";
     }
     if(summusicnumber==0){
         summusicnumber="";
     }
     if(sumvideonumber==0){
         sumvideonumber="";

     }





     info.innerText="Faylariniz muvefeqiyetle yuklendi."+sumimagenumber+summusicnumber+sumvideonumber+"Umumi fayl olcusu "+parseInt(sumFileSize)+" Mb";


 }
    

}