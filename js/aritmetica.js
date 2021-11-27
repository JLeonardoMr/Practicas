//!SI englobamos nuestras funciones en una sola
// export function sumar(a,b) { 
//     return a + b
// }
// export function restar(a,b) {
//     return a - b
// }
//!Seria de esta manera ↓
function sumar(a,b) {
    return a + b
}
function restar(a,b) {
    return a - b
}
export const Aritmetica = {
    //! Cuando el valor y la propiedad se llaman igual solo dejamos la propiedad sola. ↓
    //TODO SI
    sumar,
    restar
    //TODO NO
    // sumar:sumar,
    // restar:restar
};
//! SOLO SE PUEDE EXPORTAR UNA VEZ POR DEFECTO (EXPORT DEFAULT)
const variableExp = "Prueba exitosa";
export default variableExp;