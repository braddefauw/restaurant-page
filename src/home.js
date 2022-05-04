const home = () => {
    let main = document.createElement("div");
    main.setAttribute('id', 'content-mid');
    let footer = document.querySelector(".footer")
    let header = document.querySelector(".header");
    let contentNode = header.parentNode;
    contentNode.insertBefore(main, footer);

    //content
    let about = document.createElement('div');
    about.classList.add("about");
    main.appendChild(about);
    let aboutText = document.createElement("p");
    aboutText.innerText = "An old-fashioned, old-world Italian restaurant with a classy, authentic, ambiance in a small town setting. Founded by Tom Haverford."
    about.appendChild(aboutText);
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div");
    let img = document.createElement("img");
    img.setAttribute('src', '/dist/img/th.jpeg');
    img.setAttribute('alt', 'Restaurant Image');
    img.setAttribute('id', 'th-img');
    imgDiv.appendChild(img);
    about.appendChild(imgDiv);
}

export { home };