const ESTADOS = ['amazonas','anzoategui','apure','aragua','barinas'];
const amazonas = [1,2,3,4,5,6,7,8,9,0]
const anzoategui = [11,22,33,44,55,66,77,88,99,00]
const apure = ['porelculotelainco','coño','nojoda']
const aragua = ['1,2,3,4,5,6,7,8,9,0']
const barinas = ['1,2,3,4,5','6,7,8,9,0']
let esta_dos = document.getElementById('estados'),
munici_pios = document.getElementById('municipios'),
input_estados = document.getElementById('input_estados'),
input_municipios = document.getElementById('input_municipios');

for (let i = 0; i < ESTADOS.length; i++) {
    esta_dos.innerHTML += `<option value="${ESTADOS[i]}">Venezuela</option>`
    if (i == (ESTADOS.length - 1)) {
        console.log(i);
    }
}
input_estados.addEventListener('change',e=>{
    console.log(e.target.value);
    if (e.target.value == 'amazonas') {
        munici_pios.innerHTML = ""
        for (let i = 0; i < amazonas.length; i++) {
            munici_pios.innerHTML += `<option value="${amazonas[i]}">amazonas</option>`
        }
    }
    if (e.target.value == 'anzoategui') {
        munici_pios.innerHTML = ""
        for (let i = 0; i < anzoategui.length; i++) {
            munici_pios.innerHTML += `<option value="${anzoategui[i]}">anzoategui</option>`
        }
    }
    if (e.target.value == 'amazonas') {
        munici_pios.innerHTML = ""
        for (let i = 0; i < amazonas.length; i++) {
            munici_pios.innerHTML += `<option value="${amazonas[i]}">amazonas</option>`
        }
    }
    if (e.target.value == 'amazonas') {
        munici_pios.innerHTML = ""
        for (let i = 0; i < amazonas.length; i++) {
            munici_pios.innerHTML += `<option value="${amazonas[i]}">amazonas</option>`
        }
    }
    if (e.target.value == 'amazonas') {
        munici_pios.innerHTML = ""
        for (let i = 0; i < amazonas.length; i++) {
            munici_pios.innerHTML += `<option value="${amazonas[i]}">amazonas</option>`
        }
    }
})

