import getHTML from "./module/gethtml.js";
import { preventLoad } from "./module/preventload.js";

const $HEADER = document.querySelector('header');

addEventListener('DOMContentLoaded',e=>{
    getHTML({
        url:'header.html',
        success:(html)=>$HEADER.innerHTML = html,
        error:(error)=>$HEADER.innerHTML = `<h2>${error}</h2>`,
        name:$HEADER.outerHTML
    })
    preventLoad()
})

const $FILES = document.getElementById('files');

const UPLOADER = (file) =>{
    console.log(file);
    const XHR = new XMLHttpRequest();
    const formData = new FormData();
    //este beta recibe todo como un formulario, esto quiere decir que cada archivo que suba quedara registrado como parte de un formulario
    formData.append("files",file);

    XHR.addEventListener('readystatechange',e=>{
        if (XHR.readyState !== 4) return;
        if (XHR.status >= 200 && XHR.statusText < 300) {
            console.log(XHR.responseText);
        }else{
            let messsage = XHR.statusText || "Ocurrio un error";
            error(`Error ${XHR.status}: ${messsage}`);
        }
    })

    XHR.open("POST","/module/uploader.php");
    XHR.setRequestHeader('enc-type','multipart/form-data'),
    XHR.send(formData);
}

addEventListener('change',e=>{
    if (e.target === $FILES) {
        // console.log(e.target.files);
        const files = Array.from(e.target.files);
        files.forEach(el => UPLOADER(el));
    }
})

