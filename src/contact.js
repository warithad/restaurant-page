
const loadContact =()=>{
    const contactContainer = createContact();
    
    const main = document.getElementById('main');
    if(main.hasChildNodes()){
        main.removeChild(main.firstElementChild);
    }
    main.appendChild(contactContainer);

}

const createContact = () => {
    const info = createContactInfo();
    const map = createMap();

    const contactContainer = document.createElement('div');
    contactContainer.append(info, map);

    return contactContainer;
}

const createContactInfo =()=>{
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const phoneNumber = document.createElement('h3');
    phoneNumber.textContent = '123 456 789 0';

    const phoneImage = document.createElement('img');
    phoneImage.src = './assets/icons/phone.png';
    phoneImage.classList.add('icon');

    const phoneDiv = document.createElement('div');
    phoneDiv.append(phoneImage, phoneNumber);

    const address = document.createElement('h3');
    address.textContent = '3 Isafsdfsd sadfsdfs dsfslfsdlfks0';

    const addressImage = document.createElement('img');
    addressImage.src = './assets/icons/map-marker-outline.png';
    addressImage.classList.add('icon');

    const addressDiv = document.createElement('div');
    addressDiv.append(addressImage, address);

    contactInfo.append(phoneDiv, addressDiv);

    return contactInfo;
}


const createMap =()=>{
    const MAP_LINK = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13824.'+
    '027210369431!2d31.1342019!3d29.9792345!3m2!1i1024!2i768!4f13.1!3m3!'+
    '1m2!1s0x0%3A0x810c2f3fa2a52424!2sThe%20Great%20Pyramid%20of%20Giza!5e0!3m2!1sen!2sng!4v1666057308387!5m2!1sen!2sng';

    const frame = document.createElement('iframe');
    frame.src = MAP_LINK;
    frame.loading = 'lazy';
    frame.referrerPolicy = 'no-referrer-when-downgrade';
    frame.allowFullscreen = '';

    return frame;
}



export default loadContact;
