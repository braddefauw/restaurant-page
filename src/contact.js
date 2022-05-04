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
    let contactContainer = document.createElement('div');
    contactContainer.classList.add("contact-container");
    content.appendChild(contactContainer);
    
    let phoneDiv = document.createElement("div");
    phoneDiv.innerHTML = `Phone number`;
    phoneDiv.classList.add("contact-info");
    contactContainer.appendChild(phoneDiv);

    let addressDiv = document.createElement("div");
    addressDiv.innerHTML = `Address`;
    addressDiv.classList.add("contact-info");
    contactContainer.appendChild(addressDiv);

    let restauantImg = document.createElement("img");
    restauantImg.classList.add("restaurant-image")
    restauantImg.src = '/dist/img/toms-bistro.webp';
    contactContainer.appendChild(restauantImg);

    main.appendChild(content);
}

export { contact };