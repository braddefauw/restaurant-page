const contact = () => {
    let main = document.createElement("div");
    main.setAttribute('id', 'content-mid');
    let footer = document.querySelector(".footer")
    let header = document.querySelector(".header");
    let contentNode = header.parentNode;
    contentNode.insertBefore(main, footer);

    //content
    let content = document.createElement("div");
    content.setAttribute('id', 'content-mid');
    let about = document.createElement('div');
    about.classList.add("about");
    content.appendChild(about);
    let aboutText = document.createElement("p");
    aboutText.innerText = "This is where the contact info would go."
    about.appendChild(aboutText);
    main.appendChild(content);
}

export { contact };