const createHome =()=>{
    const div = document.createElement('div');
    div.classList.add('about-div');

    const aboutHead = document.createElement('h2');
    aboutHead.classList.add('about-head');
    aboutHead.textContent = 'About';

    const aboutText = document.createElement('p');
    aboutText.classList.add('about-text');
    aboutText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
                            +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

    div.append(aboutHead, aboutText);

    return div;
}

const loadHome =()=>{
    const homeContent = createHome();

    const main = document.getElementById('main');
    if(main.hasChildNodes()){
        main.removeChild(main.firstElementChild);
    }
    main.appendChild(homeContent);
}

export default loadHome;