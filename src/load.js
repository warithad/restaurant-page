import loadContactMenu from './contact';
import createMenu from './menu';

function createHeader(){
    const header = document.createElement('div');
    header.classList.add('header');

    const headerText = document.createElement('h1');
    headerText.classList.add('header-text');
    headerText.textContent = 'Hello';

    header.appendChild(headerText);

    return header;
}

function createMain(){
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function createNav(){
    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = 'Home';

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = 'Contact';

    contactButton.addEventListener('click', ()=>{
        loadContactMenu();
    })

    const nav = document.createElement('div');
    nav.classList.add('nav');

    nav.append(homeButton, menuButton, contactButton);

    return nav;
}

function createFooter(){
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerText = document.createElement('h3');
    footerText.textContent = 'sadslfsdflsdf';
    footerText.classList.add('footer-text');

    footer.appendChild(footerText);

    return footer;
}

function loadPage(){
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadContactMenu();
}

export default loadPage;