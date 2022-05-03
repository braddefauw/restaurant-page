const menu = () => {
    let main = document.createElement("div");
    main.setAttribute('id', 'content');
    document.body.appendChild(main);

    //header
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
    li1.classList.add("home");
    li2.classList.add("menu");
    li3.classList.add("contact");
    header.appendChild(ul);
    main.appendChild(header);

    //content
    let content = document.createElement("div");
    content.setAttribute('id', 'content-mid');
    let about = document.createElement('div');
    about.classList.add("about");
    content.appendChild(about);
    let aboutText = document.createElement("p");
    aboutText.innerText = "This is where the menu would go."
    about.appendChild(aboutText);
    main.appendChild(content);

    //footer
    let footer = document.createElement("footer");
    footer.classList.add("footer");
    let footerText = document.createElement("h5");
    footerText.innerHTML = `Copyright <span>©</span> 2022 braddefauw <a href="https://github.com/braddefauw/tic-tac-toe"><img src="img/icons8-github.svg" /></a>`;
    footer.appendChild(footerText);
    main.appendChild(footer);
}

export { menu };