import { fileList } from "./module/uploader.js";

const $FILES = document.querySelector('[data-files]');
const dropZone = document.querySelector('[data-drop]');

///**Normalito PAPA */
$FILES.addEventListener('change',e=>{
    fileList(e.target,'.sec1_content-inp')
    $FILES.value = "";
})
//**drag and Drop PAPA */
dropZone.addEventListener('dragover',e=>{
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.add('dragYdrop-active');
})
dropZone.addEventListener('dragleave',e=>{
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove('dragYdrop-active')
})
dropZone.addEventListener('drop',e=>{
    e.preventDefault();
    e.target.classList.remove('dragYdrop-active')
    fileList(e.dataTransfer,'.dragYdrop')
})