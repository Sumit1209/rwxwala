//popup windows visitor variable for js
let popup_windows=document.querySelector(".popup");
let close_windows=document.querySelector("#close");

//popup success variable for js
let popup1=document.querySelector(".popup1");
let close_2=document.querySelector("#close_2");

// pop js windows visitor query 
window.addEventListener("load",function(){
    setTimeout(
        function open(event){
            popup_windows.style.display="block";
        },1000
    )
});


close_windows.addEventListener("click",function(){
   popup_windows.style.display="none"
});

// pop-success js for 
close_2.addEventListener("click",function(){
    popup1.style.display="none"
});

const nodeList=document.querySelectorAll("#card-story");
for(i=0;i<nodeList.length;i++){
  nodeList[i].addEventListener("click",function(){
   popup1.style.display="block"
});
}

