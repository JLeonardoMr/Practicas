const d = document,
n = navigator;
export default function getGeolocation(id) {
    const $div = d.getElementById(id),
    options = {
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0
    };
    
    const success = position =>{
        let coords = position.coords
        $div.innerHTML=`
        <p>Tu posicion actual es</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precisión: <b>${coords.accuracy}</b></li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},17z" target="_blank" rel="noopener">Ver en Google Maps</a>
        `
    };

    const error = err =>{
        console.log(`Error ${err.code}: ${err.message}`);
    };

    // tambn tenemos el watchPosition() que nos da la localizacion actual en forma intermitente como un rastreador
    n.geolocation.getCurrentPosition(success,error,options)
}