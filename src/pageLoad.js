const pageLoad = () => {
let header = document.createElement("header");
let title = document.createElement("h1");
title.innerText = "Tom's Bistro";
header.appendChild(title);
let ul = document.createElement("ul");
let li1 = document.createElement("li");
li1.innerText = "Home";
ul.appendChild(li1);
let li2 = document.createElement("li");
li2.innerText = "Menu";
ul.appendChild(li2);
let li3 = document.createElement("li");
li3.innerText = "Contact";
ul.appendChild(li3);
document.body.appendChild(header);
header.appendChild(ul);
}

export { pageLoad };