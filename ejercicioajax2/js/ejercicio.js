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

const $FILES = document.getElementById('files'),
    $div = document.querySelector('.sec1_content-inp');

const UPLOADER = (file) =>{
    // console.log(file);
    const XHR = new XMLHttpRequest(),
        formData = new FormData();
    //este beta recibe todo como un formulario, esto quiere decir que cada archivo que suba quedara registrado como parte de un formulario
    formData.append('file',file);
    // console.log(formData.get('file'));

    XHR.addEventListener('readystatechange',e=>{
        if (XHR.readyState !== 4) return;
        if (XHR.status >= 200 && XHR.status < 300) {
            let json = JSON.parse(XHR.responseText)
            console.log(json);
        }else{
            let message = XHR.statusText || "Ocurrio un error";
            error(`Error ${XHR.status}: ${message}`);
        }
    })

    XHR.open("POST","php/uploader.php");
    XHR.setRequestHeader('enc-type','multipart/form-data');
    XHR.send(formData);
}

const progressUpload = (file) =>{
    const $progress = document.createElement('progress'),
        $span = document.createElement('span');

        $progress.value = 0;
        $progress.max = 100;
}

document.addEventListener('change',e=>{
    if (e.target === $FILES) {
        // console.log(e.target.files);
        const files = Array.from(e.target.files);
        files.forEach(el => UPLOADER(el));
    }
})

