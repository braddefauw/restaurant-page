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
        item("Rossa e Bianco Red and White", 
        "Homemade fettuccini Alfredo with 2 meatballs, covered in meat sauce.", 
        "$16.95")
    );
    menu.appendChild(
        item("Rigatoni All'abruzzese", 
        "Served with sliced Italian sausage and ricotta topping in marinara sauce.", 
        "$17.95")
    );
    menu.appendChild(
        item("Special Cavatelli", 
        "Served with garlic and olive oil sauteed string beans, roasted red peppers and mushrooms.", 
        "$17.95")
    );
    menu.appendChild(
        item("Linguini Broccoli", 
        "Broccoli sauteed in garlic and olive oil, served over homemade linguini.", 
        "$14.95")
    );
    menu.appendChild(
        item("Rigatoni with Fresh Mozzarella", 
        "Fresh mozzarella topping with fresh basil in tomato-basil sauce.", 
        "$17.95")
    );
    menu.appendChild(
        item("Baked Cavatelli", 
        "Served with Romano, parmigiana, ricotta and mozzarella cheeses in marinara.", 
        "$16.95")
    );
    menu.appendChild(
        item("Lasagna", 
        "Meat lasagna made with imported cheeses, fresh ricotta.", 
        "$16.95")
    );
    main.appendChild(menu);
    item();
}

export { menu };