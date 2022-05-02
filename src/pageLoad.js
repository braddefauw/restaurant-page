const pageLoad = () => {
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
    li3.innerText = "Menu";
    ul.appendChild(li3);
    header.appendChild(ul);
    document.body.appendChild(header);

    //content
    let content = document.createElement("div");
    content.setAttribute('id', 'content');
    let about = document.createElement('div');
    about.classList.add("about");
    content.appendChild(about);
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
    document.body.appendChild(content);
}

export { pageLoad };