/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst loadContact =()=>{\n    const contactContainer = createContact();\n    \n    const main = document.getElementById('main');\n    if(main.hasChildNodes()){\n        main.removeChild(main.firstElementChild);\n    }\n    main.appendChild(contactContainer);\n\n}\n\nconst createContact = () => {\n    const info = createContactInfo();\n    const map = createMap();\n\n    const contactContainer = document.createElement('div');\n    contactContainer.append(info, map);\n\n    return contactContainer;\n}\n\nconst createContactInfo =()=>{\n    const contactInfo = document.createElement('div');\n    contactInfo.classList.add('contact-info');\n\n    const phoneNumber = document.createElement('h3');\n    phoneNumber.textContent = '123 456 789 0';\n\n    const phoneImage = document.createElement('img');\n    phoneImage.src = './assets/icons/phone.png';\n    phoneImage.classList.add('icon');\n\n    const phoneDiv = document.createElement('div');\n    phoneDiv.append(phoneImage, phoneImage);\n\n    const address = document.createElement('h3');\n    address.textContent = '3 Isafsdfsd sadfsdfs dsfslfsdlfks0';\n\n    const addressImage = document.createElement('img');\n    addressImage.src = './assets/icons/map-marker-outline.png';\n    addressImage.classList.add('icon');\n\n    const addressDiv = document.createElement('div');\n    addressDiv.append(addressImage, address);\n\n    contactInfo.append(phoneDiv, addressDiv);\n\n    return contactInfo;\n}\n\n\nconst createMap =()=>{\n    const MAP_LINK = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13824.'+\n    '027210369431!2d31.1342019!3d29.9792345!3m2!1i1024!2i768!4f13.1!3m3!'+\n    '1m2!1s0x0%3A0x810c2f3fa2a52424!2sThe%20Great%20Pyramid%20of%20Giza!5e0!3m2!1sen!2sng!4v1666057308387!5m2!1sen!2sng';\n\n    const frame = document.createElement('iframe');\n    frame.src = MAP_LINK;\n    frame.loading = 'lazy';\n    frame.referrerPolicy = 'no-referrer-when-downgrade';\n    frame.allowFullscreen = '';\n\n    return frame;\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createHome =()=>{\n    const div = document.createElement('div');\n    div.classList.add('about-div');\n\n    const aboutHead = document.createElement('h2');\n    aboutHead.classList.add('about-head');\n    aboutHead.textContent = 'About';\n\n    const aboutText = document.createElement('p');\n    aboutText.classList.add('about-text');\n    aboutText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'\n                            +' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';\n\n    div.append(aboutHead, aboutText);\n\n    return div;\n}\n\nconst loadHome =()=>{\n    const homeContent = createHome();\n\n    const main = document.getElementById('main');\n    if(main.hasChildNodes()){\n        main.removeChild(main.firstElementChild);\n    }\n    main.appendChild(homeContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n\n\n(0,_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\nfunction createHeader(){\n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    const headerText = document.createElement('h1');\n    headerText.classList.add('header-text');\n    headerText.textContent = 'Hello';\n\n    header.appendChild(headerText);\n\n    return header;\n}\n\nfunction createMain(){\n    const main = document.createElement('div');\n    main.classList.add('main');\n    main.setAttribute('id', 'main');\n    return main;\n}\n\nfunction createNav(){\n    const homeButton = document.createElement('button');\n    homeButton.classList.add('nav-button');\n    homeButton.textContent = 'Home';\n\n    const menuButton = document.createElement('button');\n    menuButton.classList.add('nav-button');\n    menuButton.textContent = 'Menu';\n\n    const contactButton = document.createElement('button');\n    contactButton.classList.add('nav-button');\n    contactButton.textContent = 'Contact';\n\n    contactButton.addEventListener('click', ()=>{\n        (0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    menuButton.addEventListener('click', ()=>{\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    homeButton.addEventListener('click', ()=>{\n        (0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    const nav = document.createElement('div');\n    nav.classList.add('nav');\n\n    nav.append(homeButton, menuButton, contactButton);\n\n    return nav;\n}\n\nfunction createFooter(){\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n\n    const footerText = document.createElement('h3');\n    footerText.textContent = 'The Odin Project 2022';\n    footerText.classList.add('footer-text');\n\n    footer.appendChild(footerText);\n\n    return footer;\n}\n\nfunction loadPage(){\n    const content = document.getElementById('content');\n\n    content.appendChild(createHeader());\n    content.appendChild(createNav());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenu =()=>{\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    const descText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '\n    +'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim'\n    +'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';\n\n    const pizza = createDish('PIZZA', descText);\n    const shawarma = createDish('SHAWARMA', descText);\n    const taco = createDish('TACO', descText);\n    \n    menu.append(pizza, shawarma, taco);\n\n    return menu;\n}\n\nconst loadMenu =()=> {\n    const main = document.getElementById('main');\n    const menu = createMenu();\n\n    if(main.hasChildNodes()){\n        main.removeChild(main.firstElementChild);\n    }\n    main.appendChild(menu);\n}\n\nfunction createDish(name, desc){\n    const dishDiv = document.createElement('div');\n    dishDiv.classList.add('menu-item');\n\n    const dishDesc = document.createElement('p');\n    dishDesc.classList.add('dish-desc');\n    dishDesc.textContent = desc;\n\n    const dishTitle = document.createElement('h2');\n    dishTitle.classList.add('dish-title');\n    dishTitle.textContent = name;\n\n    const dishImage = document.createElement('img');\n    dishImage.classList.add('dish-image');\n    dishImage.src = `./assets/images/${name.toLowerCase()}.jpg`;\n    dishImage.alt = `${name}`;\n    \n    dishDiv.append(dishTitle, dishImage, dishDesc);\n\n    return dishDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;