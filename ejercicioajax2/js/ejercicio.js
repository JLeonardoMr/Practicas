import getHTML from "./module/gethtml.js";
import { preventLoad } from "./module/preventload.js";

const $HEADER = document.querySelector('header');

addEventListener('DOMContentLoaded',e=>{
    getHTML({
        url:'header.html',
        success:(html)=>$HEADER.innerHTML = html,
        error:(error)=>$HEADER.innerHTML = `<h2>${error}</h2>`
    })
    preventLoad()
})


