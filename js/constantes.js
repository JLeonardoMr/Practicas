export const pi = Math.PI;
//! ojo con esto exporta los dos porque tieneuna ","
export let usuario = "leo", password = "qwerty";
//! SOLO SE PUEDE EXPORTAR UNA VEZ POR DEFECTO (EXPORT DEFAULT)
export default function saludar() {
    console.log("Hola Mundo!!")
}
export class Saludar{
    constructor(){
        console.log("Hola modulos +ES6")
    }
}