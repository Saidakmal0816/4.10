if(!localStorage.getItem('token')){
  location.replace('../login.html')
}

const menuBtn = document.querySelector('.header_btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
function play(){
    var x=document.getElementById("navbar");
    if(x.style.display === "flex"){
        x.style.display ="none";
    } else{
        x.style.display = "flex";
    }
}