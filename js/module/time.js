const d = document;
export function DigitalTime(bStart, bStop, timeH) {
    let tempo;
    d.addEventListener('click',e=>{
        if (e.target.matches(bStart)) {
            tempo = setInterval(() => {
                const $time = new Date().toLocaleTimeString();
                d.querySelector(timeH).innerHTML = `<h3>${$time}</h3>`
            }, 100);
            e.target.disabled = true;
        }
        if (e.target.matches(bStop)) {
            clearInterval(tempo);
            d.querySelector(timeH).innerHTML = null;
            document.querySelector(bStart).disabled = false;
        }
    })    
}
export function DigitalAlarm(sound,bPlay,bStop) {
    let tempo;
    const $alarm = d.createElement('audio');
    $alarm.src = sound;
    d.addEventListener('click',e=>{
        if (e.target.matches(bPlay)) {
            tempo = setTimeout(() => {
                $alarm.play();
            }, 100);
            e.target.disabled = true;
        }
        if (e.target.matches(bStop)) {
            clearTimeout(tempo)
            $alarm.pause();
            document.querySelector(bPlay).disabled = false;
            
        }
    })
}

// const $hora = document.querySelector(timeH);
//     let interval = setInterval(() => {
//     const $time = new Date();
//     let H = $time.getHours(),
//     M = $time.getMinutes(),
//     S = $time.getSeconds();
//     $hora.innerHTML = `${H}:${M}:${S}`  
//     }, 100);