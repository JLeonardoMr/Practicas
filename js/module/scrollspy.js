export default function ScrollSpy() {
    const $navMenu = document.getElementById('navMenu'),
    $navCont = document.querySelector('.navContainer'),
    $navSpy = document.querySelectorAll('.navSpy'),
    $section = document.querySelectorAll('section');
    const callback = (entries) =>{
        entries.forEach(el=>{
            if (el.isIntersecting) {
                let intersecting = parseInt(el.target.id);
                navMenu(intersecting)                
            }
        })
    }
    const navMenu = (el)=>{
        for (let i = 0; i < $navSpy.length; i++) {
            if ($navSpy[i] == $navSpy[el]) {
                $navSpy[el].classList.add('navSpy-hover');
                continue
            }else{
                $navSpy[i].classList.remove('navSpy-hover');
            }
            
        }
    }
    const options = {
        rootMargin: '-100px',
        threshold: 0.7
    }
    const observer = new IntersectionObserver(callback, options)
    $section.forEach(el=> observer.observe(el))
    // $navMenu.addEventListener('pointerenter',e=>{
    //     $navMenu.classList.add('navMenu-hover')
    //     $navCont.classList.add('navContainer-hover')
    // })
    // $navMenu.addEventListener('pointerleave',e=>{
    //     $navMenu.classList.remove('navMenu-hover');
    //     $navCont.classList.remove('navContainer-hover');
    // })
    document.addEventListener('click',e=>{
        if (e.target.matches('.navMenu')) {
            $navMenu.classList.toggle('navMenu-hover');
            $navCont.classList.toggle('navContainer-hover');
        }else{
            $navMenu.classList.remove('navMenu-hover');
            $navCont.classList.remove('navContainer-hover');
        }
    })
}