const d = document,
    w = window,
    nO = navigator.onLine;
export default function RedState(id) {
    const $div = d.getElementById(id)
    if (nO) {
        $div.innerHTML = `
            <div class="Online-container">
                <p class="Online-text">Usted esta: <b>ONLINE</b></p>
            </div>
            `;
    }else{
        $div.innerHTML = `
            <div class="Offline-container">
                <p class="Offline-text">Usted esta: <b>OFFLINE</b></p>
            </div>
            `;        
    }
    w.addEventListener("online",(e)=> {
        $div.innerHTML = `
            <div class="Online-container">
                <p class="Online-text">Usted esta: <b>ONLINE</b></p>
            </div>
            `;
        $div.innerHTML += `
            <div class="OnAlert-container">
                <p class="OnAlert-text">Se ha restablecido la <b>Conexión</b></p>
            </div>
            `; 
        
    }, false);    
    w.addEventListener("offline",(e)=> {
        $div.innerHTML = `
            <div class="Offline-container">
                <p class="Offline-text">Usted esta: <b>OFFLINE</b></p>
            </div>
            `;
        $div.innerHTML += `
            <div class="OffAlert-container">
                <p class="OffAlert-text">Se ha perdido la <b>Conexión</b></p>
            </div>
            `; 
        
    }, false);    
}