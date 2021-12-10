const d = document;
export default function MoveColision(object,secction) {
    let $object = document.getElementById(object),
    $section = document.getElementById(secction),
    velocidad = 10, mtop = 0, mleft = 0;
    d.addEventListener("keydown",e=>{
        if (e.key == 'ArrowRight') {
            mleft += velocidad;
            if (mleft > ($section.clientWidth - 60)) {
                mleft = ($section.clientWidth - 60);
                $object.style.marginLeft = mleft + "px"; 
            }$object.style.marginLeft = mleft+"px";
        }
        if (e.key == 'ArrowLeft') {
            mleft -= velocidad;
            if (mleft > -1) {
                $object.style.marginLeft = mleft+"px";
            }else{
                mleft = 0;
                $object.style.marginLeft = mleft + "px"; 
            }
        }
        if (e.key == 'ArrowUp') {
            e.preventDefault()
            mtop -= velocidad;
            if (mtop < 0) {
                mtop = 0;
                $object.style.marginTop = mtop + "px";        
            }$object.style.marginTop = mtop + "px";
        }
        if (e.key == 'ArrowDown') {
            e.preventDefault()
            mtop += velocidad;
            if (mtop > ($section.clientHeight - 60)) {
                mtop = ($section.clientHeight - 60)
                $object.style.marginTop = mtop + "px";
            }$object.style.marginTop = mtop+"px";    
        }
        if ((e.altKey + e.key) == 'truea') alert('Accionaste el evento Alert con alt + ' + e.key);
        if ((e.ctrlKey + e.key) == 'truec') prompt('Accionaste el evento Prompt con ctrl + ' + e.key);
        if ((e.shiftKey + e.key) == 'trueS') confirm('Accionaste el evento Confirm con ctrl + ' + e.key);
    })
}