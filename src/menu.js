const item = (name, desc, price) => {
    let item = document.createElement("div");
    item.classList.add("item");
    
    let title = document.createElement("h1");
    title.innerText = name;
    item.appendChild(title);

    let description = document.createElement("p");
    description.innerText = desc;
    item.appendChild(description);

    let itemPrice = document.createElement("p");
    itemPrice.innerText = price;
    item.appendChild(itemPrice);

    return item;
}

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
    let menu = document.createElement('div');
    menu.classList.add("menu-div");
    menu.appendChild(
        item("8 Finger Cavatelli", 
        "Served in savory vodka sauce.", 
        "$16.95")
    );
    menu.appendChild(
        item("8 Finger Cavatelli", 
        "Served in savory vodka sauce.", 
        "$16.95")
    );
    menu.appendChild(
        item("8 Finger Cavatelli", 
        "Served in savory vodka sauce.", 
        "$16.95")
    );
    menu.appendChild(
        item("8 Finger Cavatelli", 
        "Served in savory vodka sauce.", 
        "$16.95")
    );
    menu.appendChild(
        item("8 Finger Cavatelli", 
        "Served in savory vodka sauce.", 
        "$16.95")
    );
    main.appendChild(menu);
    item();
}

export { menu };