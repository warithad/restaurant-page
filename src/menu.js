const createMenu =()=>{
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const descText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
    +'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'
    +'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    const pizza = createDish('PIZZA', descText);
    const shawarma = createDish('SHAWARMA', descText);
    const taco = createDish('TACO', descText);
    
    menu.append(pizza, shawarma, taco);

    return menu;
}

const loadMenu =()=> {
    const main = document.getElementById('main');
    const menu = createMenu();

    if(main.hasChildNodes()){
        main.removeChild(main.firstElementChild);
    }
    main.appendChild(menu);
}

function createDish(name, desc){
    const dishDiv = document.createElement('div');
    dishDiv.classList.add('menu-item');

    const dishDesc = document.createElement('p');
    dishDesc.classList.add('dish-desc');
    dishDesc.textContent = desc;

    const dishTitle = document.createElement('h2');
    dishTitle.classList.add('dish-title');
    dishTitle.textContent = name;

    const dishImage = document.createElement('img');
    dishImage.classList.add('dish-image');
    dishImage.src = `./assets/images/${name.toLowerCase()}.jpg`;
    dishImage.alt = `${name}`;
    
    dishDiv.append(dishTitle, dishImage, dishDesc);

    return dishDiv;
}

export default loadMenu;