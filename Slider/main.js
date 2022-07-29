let numbers=document.querySelectorAll("span");
let images=document.querySelectorAll("img");


//destrucuring array images
[imgOne,imgTwo,imgThree,imgFour]=images;

//destructuring array of numbers
[spanOne,spanTwo,spanThree,spanFour]=numbers;
console.log(spanOne)
spanOne.onclick=function(){
 
    imgOne.className="activeimg";
    imgTwo.classList.remove("activeimg");
    imgThree.classList.remove("activeimg");
    imgFour.classList.remove("activeimg");
   spanOne.className="active";
   spanTwo.classList.remove("active");
   spanThree.classList.remove("active");
   spanFour.classList.remove("active");
}
spanTwo.onclick=function(){
    imgTwo.className="activeimg";
    imgOne.classList.remove("activeimg");
    imgThree.classList.remove("activeimg");
    imgFour.classList.remove("activeimg");
    spanTwo.className="active";
   spanOne.classList.remove("active");
   spanThree.classList.remove("active");
   spanFour.classList.remove("active");
 }
 spanThree.onclick=function(){
    imgThree.className="activeimg";
    imgOne.classList.remove("activeimg");
    imgTwo.classList.remove("activeimg");
    imgFour.classList.remove("activeimg");
    spanThree.className="active";
    spanOne.classList.remove("active");
    spanFour.classList.remove("active");
    spanTwo.classList.remove("active");

 }
 spanFour.onclick=function(){
    imgFour.className="activeimg";
    imgOne.classList.remove("activeimg");
    imgThree.classList.remove("activeimg");
    imgTwo.classList.remove("activeimg");
    spanOne.classList.remove("active");
    spanTwo.classList.remove("active");
    spanThree.classList.remove("active");
    spanFour.className="active"
   


 }
 let nextbutton=document.querySelector(".next");
 //next button
 nextbutton.onclick=function(){
    let currentslide=-1;
     //determine current slide
    for(let i=0;i<images.length;i++){
        if(images[i].classList.contains("activeimg")){
            currentslide=i;
            break;
        }
    }
    currentslide++;
    if(currentslide==images.length){
        currentslide=0
    }
    if(currentslide==0){
        imgOne.className="activeimg";
        imgTwo.classList.remove("activeimg");
        imgThree.classList.remove("activeimg");
        imgFour.classList.remove("activeimg");
       spanOne.className="active";
       spanTwo.classList.remove("active");
       spanThree.classList.remove("active");
       spanFour.classList.remove("active");
    }
    if(currentslide==1){
        imgTwo.className="activeimg";
        imgOne.classList.remove("activeimg");
        imgThree.classList.remove("activeimg");
        imgFour.classList.remove("activeimg");
        spanTwo.className="active";
       spanOne.classList.remove("active");
       spanThree.classList.remove("active");
       spanFour.classList.remove("active");
    }
    if(currentslide==2){
        imgThree.className="activeimg";
        imgOne.classList.remove("activeimg");
        imgTwo.classList.remove("activeimg");
        imgFour.classList.remove("activeimg");
        spanThree.className="active";
        spanOne.classList.remove("active");
        spanFour.classList.remove("active");
        spanTwo.classList.remove("active");
    }
    if(currentslide==3){
        imgFour.className="activeimg";
    imgOne.classList.remove("activeimg");
    imgThree.classList.remove("activeimg");
    imgTwo.classList.remove("activeimg");
    spanOne.classList.remove("active");
    spanTwo.classList.remove("active");
    spanThree.classList.remove("active");
    spanFour.className="active"
    }
 }
 let previousbutton=document.querySelector(".previous");
//previous button
previousbutton.onclick=function(){
    let currentslide=4
     //determine current slide
    for(let i=0;i<images.length;i++){
        if(images[i].classList.contains("activeimg")){
            currentslide=i;
            break;
        }
    }
    currentslide--;
    if(currentslide==-1){
        currentslide=images.length-1
    }
    if(currentslide==0){
        imgOne.className="activeimg";
        imgTwo.classList.remove("activeimg");
        imgThree.classList.remove("activeimg");
        imgFour.classList.remove("activeimg");
       spanOne.className="active";
       spanTwo.classList.remove("active");
       spanThree.classList.remove("active");
       spanFour.classList.remove("active");
    }
    if(currentslide==1){
        imgTwo.className="activeimg";
        imgOne.classList.remove("activeimg");
        imgThree.classList.remove("activeimg");
        imgFour.classList.remove("activeimg");
        spanTwo.className="active";
       spanOne.classList.remove("active");
       spanThree.classList.remove("active");
       spanFour.classList.remove("active");
    }
    if(currentslide==2){
        imgThree.className="activeimg";
        imgOne.classList.remove("activeimg");
        imgTwo.classList.remove("activeimg");
        imgFour.classList.remove("activeimg");
        spanThree.className="active";
        spanOne.classList.remove("active");
        spanFour.classList.remove("active");
        spanTwo.classList.remove("active");
    }
    if(currentslide==3){
        imgFour.className="activeimg";
    imgOne.classList.remove("activeimg");
    imgThree.classList.remove("activeimg");
    imgTwo.classList.remove("activeimg");
    spanOne.classList.remove("active");
    spanTwo.classList.remove("active");
    spanThree.classList.remove("active");
    spanFour.className="active"
    }
 }