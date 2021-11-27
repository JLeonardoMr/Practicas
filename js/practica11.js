//? Modulos (import/export)
//! SOLO SE PUEDE EXPORTAR UNA VEZ POR DEFECTO (EXPORT DEFAULT)
import saludar, { password, pi, Saludar, usuario } from "./constantes.js";
import variableExp, { Aritmetica as arit } from "./aritmetica.js"; //! Aritmetica le cree un alias y ahora es airt OJO
console.log(pi)
console.log(usuario, password)

//!NO ↓
// console.log(sumar(4,5)),
//!SI ↓
console.log(arit.sumar(18,2))
//!export Default ↓
saludar()
//! Export Default a Varible
console.log(variableExp)
new Saludar()