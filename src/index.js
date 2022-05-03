import { pageLoad } from './pageLoad'
import { menu } from './menu'
import { contact } from './contact'
import { home } from './home'

pageLoad();

let menuBtn = document.querySelector(".menu");
menuBtn.addEventListener('click', function(){
    let content = document.querySelector("#content-mid");
    console.log(content);
    content.remove();
    menu();
})
let contactBtn = document.querySelector(".contact");
contactBtn.addEventListener('click', function() {
    let content = document.querySelector("#content-mid");
    console.log(content);
    content.remove();
    contact();
})
let homeBtn = document.querySelector(".home");
homeBtn.addEventListener('click', function() {
    let content = document.querySelector("#content-mid");
    console.log(content);
    content.remove();
    home();
})