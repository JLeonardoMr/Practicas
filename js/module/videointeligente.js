export default function VideoInteligente() {
    const $video = document.querySelector('video');
    const callback = (entries) =>{
        entries.forEach(el =>(el.isIntersecting) ? el.target.play() : el.target.pause());
    }
    const observer = new IntersectionObserver(callback,{
            threshold:0.5
        })
    observer.observe($video)
    document.addEventListener('visibilitychange',e=>{
        (document.visibilityState === 'visible')
        ? $video.play()
        : $video.pause()
    })
}