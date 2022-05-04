const pageLoad = () => {
    let main = document.getElementById("content");
    
    //header
    let header = document.createElement("header");
    header.classList.add("header");
    let title = document.createElement("h1");
    title.innerText = "Tom's Bistro";
    header.appendChild(title);
    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    li1.classList.add("home");
    li1.innerText = "Home";
    ul.appendChild(li1);
    let li2 = document.createElement("li");
    li2.innerText = "Menu";
    li2.classList.add("menu");
    ul.appendChild(li2);
    let li3 = document.createElement("li");
    li3.innerText = "Contact";
    li3.classList.add("contact");
    ul.appendChild(li3);
    header.appendChild(ul);
    main.appendChild(header);

    //content
    let content = document.createElement("div");
    content.setAttribute('id', 'content-mid');
    let about = document.createElement('div');
    about.classList.add("about");
    content.appendChild(about);
    let aboutText = document.createElement("p");
    aboutText.innerText = "An old-fashioned, old-world Italian restaurant with a classy, authentic, ambiance in a small town setting. Founded by Tom Haverford."
    about.appendChild(aboutText);
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div");
    let img = document.createElement("img");
    img.setAttribute('src', '../dist/img/th.jpeg');
    img.setAttribute('alt', 'Restaurant Image');
    img.setAttribute('id', 'th-img');
    imgDiv.appendChild(img);
    about.appendChild(imgDiv);
    main.appendChild(content);

    //footer
    let footer = document.createElement("footer");
    footer.classList.add("footer");
    let footerText = document.createElement("h5");
    footerText.innerHTML = `Copyright <span>©</span> 2022 braddefauw <a href="https://github.com/braddefauw/tic-tac-toe"><img src="img/icons8-github.svg" /></a>`;
    footer.appendChild(footerText);
    main.appendChild(footer);
}

export { pageLoad };