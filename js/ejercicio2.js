import countdown from "./module/countdown.js";
import userDivice from "./module/deteccion_Dispositivo.js";
import searchFilters from "./module/filtrobusqueda.js";
import getGeolocation from "./module/geolocalizacion.js";
import HamburgerMenu from "./module/hamburgerMenu.js";
import MoveColision from "./module/moveColision.js";
import Narrador from "./module/narrador.js";
import RedState from "./module/redstate.js";
import Responsive from "./module/responsivedesing.js";
import ScrollUP from "./module/scroll.js";
import ScrollSpy from "./module/scrollspy.js";
import Slider from "./module/slider.js";
import Sort from "./module/sorteo.js";
import { DigitalAlarm, DigitalTime } from "./module/time.js";
import VideoInteligente from "./module/videointeligente.js";
import WebCam from "./module/webcam.js";
import WindowTest from "./module/windowtest.js";
const d = document;
d.addEventListener('DOMContentLoaded',e=>{
    HamburgerMenu('.hamburger','.navigator','.navBtn','.uplp','.darkmode','.btn-darkmode');
    DigitalTime('.startTime','.stopTime','.timeH');
    DigitalAlarm('js/module/pokemon.mp3','.startAlarm','.stopAlarm');
    MoveColision('circle','sec2');
    countdown('Dec 31 2021 23:59:59 GMT-0400','sec3');
    ScrollUP('uplp');
    Responsive('sec4','(min-width: 575px)')
    WindowTest('#openWindow','#closeWindow','testUrl','testW','testH')
    userDivice('sec6');
    RedState('sec7');
    WebCam('sec8');
    getGeolocation('sec9');
    searchFilters('.inputSearch','.card');
    Sort('#sorteo','.li')
    Slider('.btn-carrusel_left','.btn-carrusel_right');
    ScrollSpy()
    VideoInteligente()
    Narrador()
    const $DarkMode = localStorage.getItem('DarkMode'),
    $btnDarkMode = localStorage.getItem('btnDarkMode'),
    $bodyDarkMode = localStorage.getItem('bodyDarkMode');
    if ($DarkMode !== null) {
        d.querySelector('.darkmode').classList.add($DarkMode);
        d.querySelector('.btn-darkmode').classList.add($btnDarkMode);
        d.querySelector('body').classList.add($bodyDarkMode);
    }
})
//////////////////////////////////////////////////////////////////////////
//**BTN NAV */

if (document.getElementById('hamburger')) {
    const $section = document.querySelectorAll('h2'),
    $navigator = document.getElementById('navigator');
    let secNum = 0; 
    $section.forEach(el => {
        el.setAttribute('id', `${secNum}`)
        secNum++
    });
    const $navBuger = document.getElementById('hamburger'),
    $hamburger = document.createElement('button'),
    $hamburgerBox = document.createElement('span'),
    $hamburgerInnder= document.createElement('span');
    $navBuger.appendChild($hamburger);
    $hamburger.setAttribute('class','hamburger hamburger--emphatic');
    $hamburger.setAttribute('type','button');
    $hamburger.appendChild($hamburgerBox);
    $hamburgerBox.setAttribute('class','hamburger-box');
    $hamburgerBox.appendChild($hamburgerInnder);
    $hamburgerInnder.setAttribute('class','hamburger-inner')        
    //**Creando Elementos */
    let navNum = 0; 
    $section.forEach(el => {
        const $navSection = document.createElement('div'),
        $navBtn = document.createElement('a');
        $navigator.appendChild($navSection);
        $navSection.setAttribute('class','navSection');
        $navSection.appendChild($navBtn);
        $navBtn.setAttribute('class','navBtn');
        $navBtn.setAttribute('href',`#${navNum}`);
        $navBtn.textContent = el.textContent;
        navNum++
    });
    // const $btn = document.querySelector('.hamburger');
        // $btn.addEventListener('click', (e)=>{
            //     $btn.classList.toggle('is-active');
            //     $navigator.classList.toggle('hidde')
            // })
}
if (document.getElementById('navMenu')) {
    const $section = document.querySelectorAll('h2'),
    $navigator = document.getElementById('navMenu');
    //**Creando Elementos */
    let navNum = 0; 
    $section.forEach(el => {
        const $navSection = document.createElement('div'),
        $navBtn = document.createElement('a');
        $navigator.appendChild($navSection);
        $navSection.setAttribute('class','navScroll');
        $navSection.appendChild($navBtn);
        $navBtn.setAttribute('class','navSpy');
        $navBtn.setAttribute('href',`#${navNum}`);
        $navBtn.textContent = el.textContent;
        navNum++
    });
}
if (document.getElementById('navMenu')) {
    const $section = document.querySelectorAll('section');
    //**Creando Elementos */
    let navNum = 0; 
    $section.forEach(el => {
        el.setAttribute('id',`${navNum}`)
        navNum++
    });
}
//////////////////////////////////////////////////////////////////////////
// const btn = d.getElementById('openWindow');
// btn.addEventListener('click',e=>{

// })
// window.addEventListener("online",(e)=> {
//     console.log('online');
// }, false);    

// window.addEventListener("offline",(e)=> {
//     console.log('offline');
// }, false);

// const EventUtil = {
//     addHandler: function(el, type, handler) {
        //! aqui pregunta si el evento esiste y si existe pes le dice que haga tal vaina
//         if (el.addEventListener) {
//             el.addEventListener(type, handler, false);
//         } else if (el.attachEvent) {
//             el.attachEvent("on" + type, handler);
//         } else {
//             element["on" + type] = handler;
//         }
//     }
// };
// EventUtil.addHandler(window, "online", function() {
//     console.log("Online");
// });
// EventUtil.addHandler(window, "offline", function() {
//     console.log("Offline");
// });