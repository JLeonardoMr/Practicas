export default function WindowTest(btnOpen,btnClose,Url,W,H) {
    const w = window,
        d = document;
    let ventana = null;
    let OpenWindow = ()=>{
        let $url = d.getElementById(Url).value,
            $w = d.getElementById(W).value,
            $h = d.getElementById(H).value;
        ventana = w.open(`${$url}`,'',`width=${$w}, height=${$h}`);
    }
    let CloseWindow = ()=>{
        ventana.close()
    }
    d.addEventListener('click',e=>{
        if (e.target.matches(btnOpen)) OpenWindow()
        if (e.target.matches(btnClose)) CloseWindow()
    })
}