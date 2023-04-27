let list = document.querySelectorAll(".navigation li");
function activeLink(){
    list.forEach((item)=>
    item.classList.remove("hovered"));
    this.classList.add("hovered");

}

list.forEach((item)=>
item.addEventListener("mouseover",activeLink));


let toggle = document.querySelector(".toggle");
let main = document.querySelector(".main");
let navigation = document.querySelector(".navigation");

toggle.onclick = function(){

    navigation.classList.toggle("active")
    main.classList.toggle("active")


}





addUaer();

function addUaer() {
    
  document.querySelector(".btn").addEventListener('click', function () {
     on();
 });
};
function on() {
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".addUserCard").style.display = "block";
}
function off() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".addUserCard").style.display = "none";
  }

function closeCard() {
    
    document.querySelector(".closeCard").addEventListener('click', function () {
       off();
   });
  };

function redirect () { 
  
    window.location.href="userDetails.html";

}

function redirectComp () { 
  
    window.location.href="competionDetails.html";

}