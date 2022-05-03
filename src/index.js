import { pageLoad } from './pageLoad'
import { menu } from './menu'
import { contact } from './contact'

pageLoad();
let menuBtn = document.querySelector(".menu");
menuBtn.addEventListener('click', function(){
    menu();
})
let contactBtn = document.querySelector(".contact");
contactBtn.addEventListener('click', function() {
    contact();
})
// menu();
// contact();