export default function Narrador() {
    const $select = document.getElementById('speech-select'),
    $textarea = document.getElementById('speech-text'),
    $btn = document.getElementById('speech-btn'),
    speechMessage = new SpeechSynthesisUtterance();

    let voices = [];
    speechSynthesis.addEventListener('voiceschanged',e=>{
        voices = speechSynthesis.getVoices()
        voices.forEach(el =>$select.innerHTML += `<option>${el.name}</option>`);
    })
    $select.addEventListener('change',e=>{
        speechMessage.voice = voices.find(voices => voices.name === e.target.value)
    })
    $btn.addEventListener('click',e=>{
        speechMessage.text = $textarea.value;
        speechSynthesis.speak(speechMessage)
    })
}