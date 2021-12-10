export default function Sort(id,list) {
    const $btn = document.getElementById(id),
        $li = document.querySelectorAll(list);
    document.addEventListener('click',e=>{
        if (e.target.matches(id)) {
            $li.forEach(el => {
                el.classList.remove('sort')
            });
            for (let i = 0; i < $li.length; i++) {
                $li[Math.round(Math.random()*9)].classList.add('sort')
                break
            }            
        }
    })
}