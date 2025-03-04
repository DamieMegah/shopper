let navbar = document.querySelector('.navbar'); //this is calling the class navbar and assigning it to the  variable navbar
let cancel = document.querySelector('#cancel') //this is calling the ID cancel and assigning it to the  variable cancel
document.querySelector('#menu-btn').onclick= () =>
{
    navbar.classList.toggle('active');
    cancel.classList.toggle('active');
    loginform.classList.remove('active');
}

 cancel.onclick = () => {
    navbar.classList.remove('active');
    loginform.classList.remove('active');
    cancel.classList.remove('active');
 }


let loginform = document.querySelector('.login-form'); //this is calling the class login-form and assigning it to the  variable loginform

document.querySelector('#login-btn').onclick = () =>{
    loginform.classList.toggle('active');
    navbar.classList.remove('active');

}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginform.classList.remove('active');
    cancel.classList.remove('active');
}


/*
THIS WAS INTENDED TO MAKE THE HAMBURGERB ICON TRANSFORM TO CANCEL
let menu = document.querySelector('#menu-btn');
if(menu.classList.contains('active')){
    menu.innerHTML='<i class="fas fa-times"></i>';
}
else{menu.innerHTML='<div class="fas fa-bars"></div>';

}*/

