const d = document,
n = navigator;
export default function WebCam(id) {
    const $video = d.getElementById(id);
    // console.log(n.mediaDevices.getUserMedia);
    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({video:true,audio:true})
        .then((stream)=>{
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
        })
        .catch((err)=>{
        $video.insertAdjacentHTML("afterend",`<p>${err}</p>`);
        console.log(`Sucedio el siguiente error: ${err}`)
        })
    }
}