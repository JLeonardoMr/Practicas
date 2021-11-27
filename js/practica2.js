let array1 = {
    nombre:     "Leonardo ",
    apellido:   "monsalves ",
    edad:       "27 ",
    estatura:   "1.69 "
};

let array2 = [" manzana" , " banana" , " pera"];

let nombre   = array1["nombre"];
let apellido = array1["apellido"];
let edad     = array1["edad"];
let estatura    = array1["estatura"];

frase = `<br>
        Hola, mi nombre es:<b> ${nombre}</b>  <br>
        mi apilido es:<b>      ${apellido}</b>  <br>
        mi edad es:<b>         ${edad}</b>  <br>
        y mi estatura es de:<b>${estatura}</b>`;

document.write(array1["apellido"]);
document.write(array2[1]);
document.write(frase);
