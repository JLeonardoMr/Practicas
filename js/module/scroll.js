const d = document;
export default function ScrollUP(btn) {
    const $up = document.getElementById(btn);
    d.addEventListener('scroll',e=>{
        let $scrollTop = document.documentElement.scrollTop;    
        ($scrollTop > 100) 
        ? $up.classList.add('show') 
        : $up.classList.remove('show');
    })
}