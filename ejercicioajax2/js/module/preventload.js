export function preventLoad() {
    document.addEventListener('click',e=>{
        if (e.target.matches('[data-tag]')) {
            let a = location.href;
            let b = e.target.getAttribute('href');
            let c =  a.indexOf(b)
            if (c !== -1) e.preventDefault();
        }
    })
}