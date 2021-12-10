export default function HamburgerMenu(btnNav,nav,menuLink,btnup,darkmode,btnDarkmode,openWindow,closeWindow) {
    const d = document;
    const w = window;
    d.addEventListener('click', (e)=>{
        //** aqui le digo que todo lo que este dentro {e.target.matches(`${btnNav} *`)} */
        if (e.target.matches(btnNav) || e.target.matches(`${btnNav} *`)) {
            d.querySelector(btnNav).classList.toggle('is-active')
            d.querySelector(nav).classList.toggle('hidde')
        }
        if (e.target.matches(menuLink)) {
            d.querySelector(btnNav).classList.remove('is-active')
            d.querySelector(nav).classList.remove('hidde')
        }
        if (e.target.matches(btnup)) {
            window.scrollTo({
                behavior: 'smooth',
                top: 0
            })
        }
        if (e.target.matches(`${darkmode} *`)||e.target.matches(darkmode)) {
            d.querySelector(darkmode).classList.toggle('darkmodeOn');
            d.querySelector(btnDarkmode).classList.toggle('btn-darkmodeOn');
            d.querySelector('body').classList.toggle('darkbody')
            const Local = localStorage.getItem('DarkMode')
            if (Local === 'darkmodeOn') {
                localStorage.removeItem('DarkMode');
                localStorage.removeItem('btnDarkMode');
                localStorage.removeItem('bodyDarkMode');
                //! ete elimina todo lo que esta en el local
                //? localStorage.clear();
            }else{
                localStorage.setItem('DarkMode','darkmodeOn','btn-darkmodeOn');
                localStorage.setItem('btnDarkMode','btn-darkmodeOn');
                localStorage.setItem('bodyDarkMode','darkbody');
            }
        }
    })
}