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
    let about = document.createElement('div');
    about.classList.add("about");
    content.appendChild(about);
    let aboutText = document.createElement("p");
    aboutText.innerText = "This is where the menu info would go."
    about.appendChild(aboutText);
    main.appendChild(content);
}

export { menu };