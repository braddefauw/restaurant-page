const contact = () => {
    let main = document.createElement("div");
    main.setAttribute('id', 'content-mid');
    let footer = document.querySelector(".footer")
    let header = document.querySelector(".header");
    let contentNode = header.parentNode;
    contentNode.insertBefore(main, footer);

    //content
    let content = document.createElement("div");
    content.setAttribute('id', 'contact-content');
    main.appendChild(content);
    
    let phoneDiv = document.createElement("div");
    phoneDiv.innerHTML = `Phone number: 867-5309`;
    phoneDiv.classList.add("contact-info");
    content.appendChild(phoneDiv);

    let addressDiv = document.createElement("div");
    addressDiv.innerHTML = `Address: 123 Main Street, Pawnee, Indiana`;
    addressDiv.classList.add("contact-info");
    content.appendChild(addressDiv);

    let restauantImg = document.createElement("img");
    restauantImg.classList.add("restaurant-image")
    restauantImg.src = 'img/toms-bistro.jpeg';
    content.appendChild(restauantImg);

    main.appendChild(content);
}

export { contact };