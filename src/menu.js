const menu = () => {
    let main = document.createElement("div");
    main.setAttribute('id', 'content-mid');
    let footer = document.querySelector(".footer")
    let header = document.querySelector(".header");
    let contentNode = header.parentNode;
    contentNode.insertBefore(main, footer);

    //content
    let content = document.createElement("div");
    content.setAttribute('id', 'menu-content');
    let cavDiv = document.createElement("div");
    let cavImg = document.createElement("img");
    cavImg.setAttribute('src', '/dist/img/cavatelli.jpeg');
    cavImg.classList.add("menu-image");
    cavDiv.appendChild(cavImg);
    content.appendChild(cavDiv);
    main.appendChild(content);
}

export { menu };