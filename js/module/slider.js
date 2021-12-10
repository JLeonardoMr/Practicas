export default function Slider(left,right) {
    let num = 1;
    document.addEventListener('click',e=>{
        e.preventDefault()
        if (e.target.matches(`${right} *`)) {
            document.getElementById(`img${num}`).style.marginLeft = '-100%'
            num++
            if (num == 4) num = 3
        }
        if (e.target.matches(`${left} *`)) {
            document.getElementById(`img${num}`).style.marginLeft = '100%'
            num--
            if (num == 0) num = 1
        }
    })
}