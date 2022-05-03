import { pageLoad } from './pageLoad'
import { menu } from './menu'
import { contact } from './contact'

pageLoad();
let content = document.querySelector("#content");

let menuBtn = document.querySelector(".menu");
menuBtn.addEventListener('click', function(){
    content.remove();
    menu();
})
let contactBtn = document.querySelector(".contact");
contactBtn.addEventListener('click', function() {
    content.remove();
    contact();
})
let homeBtn = document.querySelector(".home");
homeBtn.addEventListener('click', function() {
    content.remove();
    pageLoad();
})