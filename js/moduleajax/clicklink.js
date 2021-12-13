import DOMAjax from "./ajaxaxios.js"

export function clickDom(tec,ani,peo,arch,nat) {
    addEventListener('click',e=>{
        e.preventDefault()
        if (e.target.matches(tec)) {
            DOMAjax(e.target.dataset.tag);
        }
        if (e.target.matches(ani)) {
            DOMAjax(e.target.dataset.tag);
        }
        if (e.target.matches(peo)) {
            DOMAjax(e.target.dataset.tag);
        }
        if (e.target.matches(arch)) {
            DOMAjax(e.target.dataset.tag);
        }
        if (e.target.matches(nat)) {
            DOMAjax(e.target.dataset.tag);
        }
    })
}
