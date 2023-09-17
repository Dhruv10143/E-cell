const a=document.querySelector("#b1");
const b=document.querySelector("#b2");
const c=document.querySelector("#b3");
const d=document.querySelector("#b4");
const e=document.querySelector("#b5");
const f=document.querySelector("#b6");
const g=document.querySelector("#b7");
const h=document.querySelector("#b8");
const i=document.querySelector("#b9");
const navbar1=document.querySelector(".navig1")
const navbar=document.querySelector(".navig")
var arr=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
var brr=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
navbar1.addEventListener('click',()=>{
  navbar.classList.toggle('v-class');
})
a.addEventListener("click",function(){
  var int=0;
  var buttonInnerHTML = a.innerHTML;
  buttonAnimation(buttonInnerHTML,arr,int,brr);
})
b.addEventListener("click",function(){
  var buttonInnerHTML = b.innerHTML;
  var int=1;
  buttonAnimation(buttonInnerHTML,arr,int,brr);
})
c.addEventListener("click",function(){
  var buttonInnerHTML = c.innerHTML;
  var int=2;
  buttonAnimation(buttonInnerHTML,arr,int,brr);
})
d.addEventListener("click",function(){
  var buttonInnerHTML = d.innerHTML;
  var int=3;
  buttonAnimation(buttonInnerHTML,arr,int,brr);
})
e.addEventListener("click",function(){
  var buttonInnerHTML = e.innerHTML;
  var int=4;
  buttonAnimation(buttonInnerHTML,arr,int,brr);
})
f.addEventListener("click",function(){
  var buttonInnerHTML = f.innerHTML;
  var int=5;
  buttonAnimation(buttonInnerHTML,arr,int,brr);
})
g.addEventListener("click",function(){
  var buttonInnerHTML = g.innerHTML;
  var int=6;
  buttonAnimation(buttonInnerHTML,arr,int,brr);
})
h.addEventListener("click",function(){
  var buttonInnerHTML = h.innerHTML;
  var int=7;
  buttonAnimation(buttonInnerHTML,arr,int,brr);
})
i.addEventListener("click",function(){
  var buttonInnerHTML = this.innerHTML;
  var int=8;
  buttonAnimation(buttonInnerHTML,arr,int,brr);
  
})
function caller(i){
  if(i==0){
    var int=0;
  var buttonInnerHTML = a.innerHTML;
  buttonAnimation(buttonInnerHTML,arr,int,brr);
  }
}

function buttonAnimation(currentKey,arr,int,brr) {

      var activeButton = document.querySelector("." + currentKey);
      var i=int;
      var k=0;
      if(i<=8){
      if(arr[i]=='-1'){
      activeButton.classList.add("pressed");
      arr[i]=0;
      while(brr[k]!=-1){
      brr[k]=i;
      k++;
      }
      }
      else{
      activeButton.classList.remove("pressed");
      arr[i]=-1;
      }
    }
    };
      // setTimeout(function() {
      //   activeButton.classList.remove("pressed");
      // }, 900);































//  var numberOfButtons = document.querySelectorAll(".btn").length;

//  for (var i = 0; i < numberOfButtons; i++) {
 
//    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
//     const arr=['-1',"-1","-1","-1","-1","-1","-1","-1","-1"];
 
//      var buttonInnerHTML = this.innerHTML;
//      buttonAnimation(buttonInnerHTML,arr,i);
 
//    });
//    function buttonAnimation(currentKey,arr,i) {

//     var activeButton = document.querySelector("." + currentKey);
//     if(arr[i]=='-1'){
//     activeButton.classList.add("pressed");
//     arr[i]=0;
//     }
//     else{
//     activeButton.classList.remove("pressed");
//     arr[i]=-1;
//     }
//     // setTimeout(function() {
//     //   activeButton.classList.remove("pressed");
//     // }, 900);
  
//   }
 
//  }
