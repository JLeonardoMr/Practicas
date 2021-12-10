export default function Responsive(sec,$575px) {
    const $div = document.getElementById(sec),
    $responMedia = window.matchMedia($575px);
    //!ESTA PUTA PROMESA DICE: CUANDO ESTA MIERDA SE CUMPLA, HACE ESTO
    let mediaScreen = (e)=>{
        if (e.matches) {
            $div.innerHTML = `<iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/h7MYJghRWt0"
            title="YouTube video player"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>`;
        }else{
            $div.innerHTML = `<a class="valorant" href="https://youtu.be/h7MYJghRWt0">Die For You // Vídeo musical oficial // VALORANT Champions 2021</a>`
        }
    }
    //! ESTA VAINA DE AQUI ABAJO ES UNA PUTA PROMESA
    $responMedia.addListener(mediaScreen)
    //! Aqui ejecutamos la funcion para que nos pinte de una vez el beta
    //! porque el addlister solo funciona cuando hay cambios en la pantalla
    mediaScreen($responMedia)
}