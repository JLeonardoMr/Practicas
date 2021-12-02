//? Ejercicio 1

//! P1

const eText_1 = document.getElementById("text1");
const eInput_1 = document.getElementById("input1");
const eBtn_1 = document.getElementById("btn1");

eBtn_1.addEventListener("click", (e) => {
  e.preventDefault();
  eInput_1.value = eText_1.value.length;
  // console.log(eText_1.value.length)
});

//! P2

const eText_2 = document.getElementById("text2");
const eInput_2 = document.getElementById("input2");
const eInput_2_2 = document.getElementById("input2-2");
const eBtn_2 = document.getElementById("btn2");

eBtn_2.addEventListener("click", (e) => {
  e.preventDefault();
  eInput_2_2.value = eText_2.value.substr(0, eInput_2.value);
  // console.log(eText_2.value.substr(0,eInput_2.value))
});

//! P3

const eText_3 = document.getElementById("text3");
const eInput_3 = document.getElementById("input3");
const eBtn_3 = document.getElementById("btn3");

eBtn_3.addEventListener("click", (e) => {
  e.preventDefault();
  eInput_3.value = eText_3.value.split(" ");
  // console.log(eText_3.value.split(' '))
});

//! P4
const eText_4 = document.getElementById("text4");
const eInput_4 = document.getElementById("input4");
const eBtn_4 = document.getElementById("btn4");
const Text4 = document.querySelector(".resultado");
const esp = ", ";

eBtn_4.addEventListener("click", (e) => {
  e.preventDefault();
  eTextr = eText_4.value + esp;
  if (eInput_4.value <= 1) {
    console.warn("no ingresaste nada care'e verga");
  }
  Text4.innerHTML = eTextr.repeat(eInput_4.value);
  // console.log(eTextr.repeat(eInput_4.value));
  // console.log(eTextr)
});

//? Ejercicio 2

//! P5
const eText_5 = document.getElementById("text5");
const eInput_5 = document.getElementById("input5");
const eBtn_5 = document.getElementById("btn5");

eBtn_5.addEventListener("click", (e) => {
  e.preventDefault();
  const p5 = eText_5.value;
  if (p5.length < 4) {
    console.warn("no ingresaste nada care'e verga");
  } else {
    const p = p5.split("");
    const textReverse = p.reverse();
    const textToString = textReverse.toString();
    eInput_5.innerHTML = textToString.replace(/,/g, "");
    // console.log(textToString.replace(/,/g,""))
  }
});

//! P6

const eText_6 = document.getElementById("text6");
const eInput_6 = document.getElementById("input6");
const eBtn_6 = document.getElementById("btn6");

// console.log(eText_6.value.length)
eBtn_6.addEventListener("click", (e) => {
  if (eText_6.value.length <= 8) {
    console.warn("introduce una cadena de texto larga");
  } else {
    const textoArray = eText_6.value.split(" ");
    let contador = 0;
    (repetidos = []), (noRepetidos = []);
    textoArray.forEach((value) => {
      textoArray.filter((pito) => pito == value).length > 1
        ? repetidos.push(value) + contador++
        : noRepetidos.push(value);
    });
    const conseguido = [...new Set(repetidos)];
    eInput_6.value = `${conseguido} se repite ${contador} veces`;

    // console.log(conseguido, contador)
  }
});

//! P7
const eText_7 = document.getElementById("text7");
const eInput_7 = document.getElementById("input7");
const eBtn_7 = document.getElementById("btn7");
// console.log(eText_7.value.length)
let strReverse = null;
eBtn_7.addEventListener("click", (e) => {
  if (eText_7.value.length <= 2) {
    console.warn("elpepe");
  } else {
    let text7 = eText_7.value.toLowerCase();
    let strReverse = text7.split("").reverse().join("");
    text7 == strReverse
      ? (eInput_7.value = "cierto")
      : (eInput_7.value = "falso");
  }
});
//! P8
const eText_8 = document.getElementById("text8");
const eInput_8 = document.getElementById("input8");
const eBtn_8 = document.getElementById("btn8");
let regex = /(xyz)/g;
eBtn_8.addEventListener("click", (e) => {
  eText_8.value.length <= 8
    ? console.warn("vamos a segui con la guachafita?")
    : (eInput_8.value = eText_8.value.replaceAll(regex, ""));
});

//? Ejercicio 2

//! P9

const eText_9 = document.getElementById("text9");
const eBtn_9 = document.getElementById("btn9");

eBtn_9.addEventListener("click", (e) => {
  eText_9.value = Math.random() * (601 - 500) + 501;
  eText_9.value = Math.trunc(eText_9.value);
});

//! P10

const eText_10 = document.getElementById("text10");
const eInput_10 = document.getElementById("input10");
const eBtn_10 = document.getElementById("btn10");
// console.log(eText_7.value.length)
let intReverse = null;
eBtn_10.addEventListener("click", (e) => {
  if (eText_10.value.length <= 2) {
    console.warn("elpepe");
    eInput_10.value = "elpepe";
  } else {
    let text10 = eText_10.value;
    // console.log(text10)
    let intReverse = text10.split("").reverse().join("");
    text10 == intReverse
      ? (eInput_10.value = "cierto")
      : (eInput_10.value = "falso");
  }
});

//! P11

const eText_11 = document.getElementById("text11");
const eInput_11 = document.getElementById("input11");
const eBtn_11 = document.getElementById("btn11");
// console.log(eText_11.value);
eBtn_11.addEventListener("click", (e) => {
  let facInt = eText_11.value;
  if (facInt <= 0) {
    console.warn("elpepe");
    eInput_11.value = "elpepe 0";
  } else {
    //! QUE NO SE ME OLVIDE
    //? Para que me retorne el total tengo que declararlo fuera del for
    let total = 1;
    // console.log(facInt)
    for (i = 1; i <= facInt; i++) {
      total = total * i;
      // console.log(total)
    }
    eInput_11.value = total;
    // return total;
  }
});

//! P12

const eText_12 = document.getElementById("text12");
const eInput_12 = document.getElementById("input12");
const eBtn_12 = document.getElementById("btn12");

eBtn_12.addEventListener("click", (e) => {
  let primos = eText_12.value;
  let verdad = "es primo";
  let falso = "no es primo";
  // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 y 97.
  if (primos.length <= 0) {
    eInput_12.value = "coloque algo sapo hdp";
  } else {
    //? Hijueputa como me costo entender esta madre
    for (var i = 2; i < primos; i++) {
      //! divido el numero que mando por el 2 usando un for si da 0 el hdp CHULETA
      if (primos % i === 0) return (eInput_12.value = falso);
    }
    //! si sale el hdp 1 CHULETA
    primos == 1 ? (eInput_12.value = falso) : (eInput_12.value = verdad);
    // return console.log(false);  // return console.log(primos !== 1);
  }
});

//! P13

const eText_13 = document.getElementById("text13");
const eInput_13 = document.getElementById("input13");
const eBtn_13 = document.getElementById("btn13");

eBtn_13.addEventListener("click", (e) => {
  let num = eText_13.value;
  let par = "es par";
  let impar = "es impar";
  if (num.length <= 0) {
    eInput_13.value = "coloque algo sapo hdp";
  } else {
    num % 2 == 0 || !num == 1
      ? (eInput_13.value = par)
      : (eInput_13.value = impar);
    //console.log(par):console.log(impar);
  }
});

//! P14

const eText_14 = document.getElementById("text14");
const eInput_14 = document.getElementById("input14");
eText_14.value = 0;
eInput_14.value = 32;

// (0 °C × 9/5) + 32 = 32 °F
eText_14.addEventListener("input", (e) => {
  eInput_14.value = (eText_14.value * 9) / 5 + 32;
});
eInput_14.addEventListener("input", (e) => {
  eText_14.value = ((eInput_14.value - 32) * 5) / 9;
});
// console.log((0 * 9/5) +32);
// console.log((32− 32) * 5/9)

//! P15
const eText_15 = document.getElementById("text15");
const eInput_15 = document.getElementById("input15");

const eText_15_2 = document.getElementById("text15_2");
const eInput_15_2 = document.getElementById("input15_2");

eText_15.addEventListener("input", (e) => {
  let target = e.target,
    length = target.value.length;
  target.value = target.value.replace(/[^+0-1]/g, "").replace(/\d{14}/, "");
  if (eText_15.value.length <= 0) {
    eInput_15.value = "Coloque Binario";
  } else {
    let binario = parseInt(eText_15.value, 2);
    eInput_15.value = binario + " base 10";
    // console.log(binario)
  }
});

eText_15_2.addEventListener("input", (e) => {
  let target = e.target,
    length = target.value.length;
  target.value = target.value.replace(/[^+0-9]/g, "").replace(/\d{14}/, "");
  if (eText_15_2.value.length <= 0) {
    eInput_15_2.value = "Coloque Decimal";
  } else {
    let decimal = parseInt(eText_15_2.value);
    eInput_15_2.value = decimal.toString(2) + " base 2";
    // console.log(decimal.toString(2));
  }
});

//! P16
const eText_16 = document.getElementById("text16");
const eInput_16 = document.getElementById("input16");
const eInput_16_2 = document.getElementById("input_16");
eText_16.addEventListener("input", (e) => {
  let target = e.target,
    length = target.value.length;
  target.value = target.value.replace(/[^+0-9]/g, "").replace(/\d{22}/, "");
  if (eText_16.value.length <= 0 || eInput_16.value.length <= 0) {
    eInput_16_2.value = "Ingrese numero y %";
    // console.log("Ingrese numero y %")
  } else {
    let num = parseInt(eText_16.value);
    let porcentaje = parseInt(eInput_16.value);
    eInput_16_2.value = (num / 100) * porcentaje;
  }
});
eInput_16.addEventListener("input", (e) => {
  let target = e.target,
    length = target.value.length;
  target.value = target.value.replace(/[^+0-9]/g, "").replace(/\d{4}/, "");
  if (eText_16.value.length <= 0 || eInput_16.value.length <= 0) {
    eInput_16_2.value = "Ingrese numero y %";
    // console.log("Ingrese numero y %")
  } else {
    let num = parseInt(eText_16.value);
    let porcentaje = parseInt(eInput_16.value);
    eInput_16_2.value = (num / 100) * porcentaje;
  }
});
// console.log(100 / 100*5);

//! P17
//? CAMBIE EL EJERCICIO PORQUE EL OTRO ERA COMO MUY IZI
const eText_17 = document.getElementById("text17");
const eInput_17 = document.getElementById("input17");

eText_17.addEventListener("input", (e) => {
  let hoy = new Date();
  //! Ingresa la fecha dia-mes-año y esa mierda sola
  //! le quita un dia
  //! para resolver, convertir a array y luego a text
  //! cambiando los "-" por "," que es lo que jode
  let fecha = new Date(eText_17.value.replaceAll("-", ",").split().join());
  // console.log(fecha);
  //!  aqui solo restamos el año por el año en que nacimos y da la edad
  let edad = hoy.getFullYear() - fecha.getFullYear();
  eInput_17.value = edad + " Años";
  // console.log(edad);
});

//! P18

const eText_18 = document.getElementById("text18");
const eInput_18 = document.getElementById("input18");
const eInput_18_2 = document.getElementById("input_18");
eText_18.addEventListener("input", (e) => {
  if (eText_18.value.length <= 0 || !typeof eText_18.value === "string") {
    eInput_18.value = "Coloque una palabra";
    eInput_18_2.value = "o Frase para desmenusar";
  } else {
    let text18 = eText_18.value.replaceAll(/[0-9]/g, "").replaceAll(" ", "");
    let vocales = [];
    let consonantes = [];
    let palabra = text18.split("");
    //! Ojo con esto ↓↓ le quite la g para que no jodiera
    let reGex = /[aeiouá-ü]/i;
    for (let i = 0; i < palabra.length; i++) {
      // console.log(palabra[i]);
      //! Funciono de chiripa ↓↓
      if (reGex.test(palabra[i])) {
        // console.log(palabra[i])
        vocales.push(palabra[i]);
        // console.log(vocales.length);
        eInput_18.value = "Tiene " + vocales.length + " vocales";
      } else {
        // console.log(palabra[i])
        consonantes.push(palabra[i]);
        // console.log(consonantes.length);
        eInput_18_2.value = "Tiene " + consonantes.length + " consonantes";
      }
    }
    // eInput_18.value = "todo bien"
    // eInput_18_2.value = "todo bien"
  }
});

//! P19

const eText_19 = document.getElementById("text19");
const eInput_19 = document.getElementById("input19");
const eBtn_19 = document.getElementById("btn19");
eBtn_19.addEventListener("click", (e) => {
  let nombre = eText_19.value;
  let reGex = /^[a-zá-ü\s]+$/gi;
  reGex.test(nombre)
    ? (eInput_19.value = "correcto")
    : (eInput_19.value = "incorrecto");
});
//! P20

const eText_20 = document.getElementById("text20");
const eInput_20 = document.getElementById("input20");
const eBtn_20 = document.getElementById("btn20");
eBtn_20.addEventListener("click", (e) => {
  let correo = eText_20.value;
  let reGex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  reGex.test(correo)
    ? (eInput_20.value = "correcto")
    : (eInput_20.value = "incorrecto");
});

//! P21

const eText_21 = document.getElementById("text21");
const eInput_21 = document.getElementById("input21");
const eBtn_21 = document.getElementById("btn21");

eBtn_21.addEventListener("click", (e) => {
  let num = null;
  let reGex = /^[^a-zá-ü]+$/gi;
  let array = [];
  if (eText_21.value.length <= 0 || !reGex.test(eText_21.value)) {
    console.log("agrega algo malditase");
  } else if (eText_21.value.indexOf(" ") || eText_21.value.indexOf(",")) {
    // num = eText_21.value.replaceAll(",,", "").replaceAll("-", "").replaceAll(" ", "");
    num = eText_21.value
      .replaceAll(",,", " ")
      .replaceAll("-", "")
      .replaceAll(" ", "")
      .replaceAll(",,", ",");
    // console.log(num);
    array = num.split(",");
    // console.log(array);
    for (let i = 0; i < array.length; i++) {
      // console.log(array[i]);
      let cuadrado = Math.pow(array[i], 2);
      // console.log(Math.pow(array[i],2));
      let htmlCode = `<div class="bg-primary col-auto d-flex m-1">
                        <p class="m-auto">${array[i]}² = <b class="bg-success">${cuadrado}</b></p>
                      </div>`;
      eInput_21.innerHTML += htmlCode;
      eText_21.value = "";
    }
  }
});

//! P22

const eText_22 = document.getElementById("text22");
const eInput_22 = document.getElementById("input22");
const eBtn_22 = document.getElementById("btn22");

eBtn_22.addEventListener("click", (e) => {
  let num = null;
  let reGex = /^[^a-zá-ü]+$/gi;
  let array = [];
  if (eText_22.value.length <= 4 || !reGex.test(eText_22.value)) {
    console.log("agrega algo malditase");
  } else if (eText_22.value.indexOf(" ") || eText_22.value.indexOf(",")) {
    num = eText_22.value
      .replaceAll(",,", " ")
      .replaceAll(",,", " ")
      .replaceAll(" ", "")
      .replaceAll(",,", ",");
    array = num.split(",");
    let mayor = Math.max(...array);
    let menor = Math.min(...array);
    // console.log(mayor);
    // console.log(menor);
    eInput_22.innerHTML = `<div class="bg-primary col-auto d-flex m-1"><p>El Numero maximo es <b class="bg-success">${mayor}</b> El Numero minimo es <b class="bg-danger">${menor}</b></p>
  </div>`;
  }
});

//! P23

const eText_23 = document.getElementById("text23");
const eInput_23 = document.getElementById("input23");
const eBtn_23 = document.getElementById("btn23");

eBtn_23.addEventListener("click", (e) => {
  let reGex = /^[^a-zá-ü]+$/gi;
  let pares = [];
  let impares = [];
  if (eText_23.value.length <= 4 || !reGex.test(eText_23.value)) {
    console.log("agrega algo malditase");
  } else {
    let num = eText_23.value
      .replaceAll(",,", " ")
      .replaceAll(" ", "")
      .replaceAll(",,", ",");
    let array = num.split(",");
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0 || !array[i] == 1) {
        pares.push(array[i]);
        // console.log(pares);
      } else {
        impares.push(array[i]);
        // console.log(impares);
      }
    }
    let mayor = {
      pares,
      impares,
    };
    // console.log(mayor);
    let htmlCode = `<div class="bg-primary col-auto my-0">
                      <p>Numeros pares <b class="bg-success">${mayor.pares}</b></p>
                      <p>Numeros impares <b class="bg-danger">${mayor.impares}</b></p>
                    </div>`;
    eInput_23.innerHTML += htmlCode;
  }
});

//! P24

const eText_24 = document.getElementById("text24");
const eInput_24 = document.getElementById("input24");
const eBtn_24 = document.getElementById("btn24");

eBtn_24.addEventListener("click", (e) => {
  let reGex = /^[^a-zá-ü]+$/gi;
  if (eText_24.value.length <= 4 || !reGex.test(eText_24.value)) {
    console.log("agrega algo malditase");
  } else {
    let num = eText_24.value
      .replaceAll(",,", " ")
      .replaceAll(" ", "")
      .replaceAll(",,", ",");
    let arraySort = num.split(",");
    let arrayAsc = arraySort.sort();
    let arrayDesc = arraySort.sort();
    eInput_24.innerHTML += `<div class="bg-primary col-auto my-0">
                              <p>Numeros acendentes <b class="bg-success">${arrayAsc}</b></p>
                              <p>Numeros decendentes <b class="bg-danger">${arrayDesc.reverse()}</b></p>
                            </div>`;
  }
});

//! P25

const eText_25 = document.getElementById("text25");
const eInput_25 = document.getElementById("input25");
const eBtn_25 = document.getElementById("btn25");

eBtn_25.addEventListener("click", (e) => {
  if (eText_25.value.length <= 3) {
    console.log("agrega algo malditase");
  } else {
    let string = eText_25.value
      .replaceAll(",,", " ")
      .replaceAll(" ", "")
      .replaceAll(",,", ",");
    let array = string.split(",");
    //!Este beta nos ayuda↓↓↓ a eliminar duplicados de un array
    let unicos = new Set(array); //! ←←console.log([...unicos]);
    //! Recorre el array↑↑↑ y los va metiendo en la variable bulda e pasao!
    eInput_25.innerHTML += `<div class="bg-primary col-auto my-0">
          <p>Duplicados eliminados <b class="bg-success">${[...unicos]}</b></p>
                            </div>`;
  }
});
//! P26

const eText_26 = document.getElementById("text26");
const eInput_26 = document.getElementById("input26");
const eBtn_26 = document.getElementById("btn26");

eBtn_26.addEventListener("click", (e) => {
  let reGex = /^[^a-zá-ü]+$/gi,
    suma = 0,
    total = null;
  if (eText_26.value.length <= 4 || !reGex.test(eText_26.value)) {
    console.log("agrega algo malditase");
  } else {
    let num = eText_26.value
      .replaceAll(",,", " ")
      .replaceAll(" ", "")
      .replaceAll(",,", ",");
    let array = num.split(",");
    for (let i = 0; i < array.length; i++) {
      suma += parseInt(array[i]);
      total = suma / array.length;
      //! Estas fueros las pruebas //
      // console.log(suma / array.length);
      // arrayInt.push(parseInt(array[i]));
      // let suma = arrayInt.reduce((previous, current)=>current += previous);
      // let total = suma / arrayInt.length;
      // console.log(total);
      //!No lo entendi muy bien pero da el mismo resultado
      // //! ESTO ME AYUDO A ENTENDER COMO FUNCIONA 
      // let values = [9,8,7,6,5,4,3,2,1,0];
      // let sum = values.reduce((previous, current) => current += previous);
      // let avg = sum / values.length;
      // avg = 28
      // console.log(avg);
      }
    eInput_26.innerHTML += `<div class="bg-primary col-auto my-0">
                              <p>Promedio <b class="bg-success">${total}</b></p>
                              
                            </div>`;    
  }
});

//! P27

const movieBtn = document.getElementById('guardar'),
  alertMsg = document.getElementById('alertMsg');

//////////////////////////////////////////////////////////////////////////////////////////////////////
//*! Select Año    */
const selectYear = document.getElementById('año');
//////////////////////////////////////////////////////////////////////////////////////////////////////
//*! Select De Generos    */
const selectGeneros = document.getElementById("genero"),
  generosbtn = document.getElementById("generos"),
  generos = "Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thirller, War, Westen";
let generosArr = generos.replaceAll(" ", "").split(","),
  setGeneros = [];
//////////////////////////////////////////////////////////////////////////////////////////////////////
//*! Select De paises    */

const selectPaises = document.getElementById("pais"),
  paisesbtn = document.getElementById("paises"),
  paises = "Argentina, Chile, Bolivia, Ecuador, Mexico, Nicaragua, Venezuela";
let paisesArr = paises.replaceAll(" ", "").split(","),
  setPaises = [];

//////////////////////////////////////////////////////////////////////////////////////////////////////
!(function () {
  let year = 1950;  
  for (let i = 2021; i >= year; i--) {
    selectYear.innerHTML +=`<option>${i}</option>`;
  }
  for (let i = 0; i < generosArr.length; i++) {
    selectGeneros.innerHTML += `<option>${generosArr[i]}</option>`;
  }
  for (let i = 0; i < paisesArr.length; i++) {
    selectPaises.innerHTML += `<option>${paisesArr[i]}</option>`;
  }
})();
//////////////////////////////////////////////////////////////////////////////////////////////////////
                //! Generos Function
selectGeneros.addEventListener("change", (e) => {
  let gerSelected = selectGeneros.value;
  setGeneros.push(gerSelected);
  generosArr.splice(generosArr.indexOf(gerSelected), 1);
  generosList(generosArr,selectGeneros);
  generosBtn(setGeneros,generosbtn);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
function QuitarG(value) {
  document.getElementById(`${value}`).remove();
  setGeneros.splice(setGeneros.indexOf(value), 1);
  generosBtn(setGeneros,generosbtn);
  generosArr.splice(0, 0, value);
  generosList(generosArr,selectGeneros);
  generosArr.sort();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
const generosList = (array, print) => {
  print.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    print.innerHTML += `<option selected hidden>Generos</option>
                        <option>${array[i]}</option>`;
  }
};
const generosBtn = (array, print) => {
  let id = 0;
  print.innerHTML = "";
  array.forEach((valor) => {
    print.innerHTML += `<input type="button" id="${valor}" value="${valor}" class="btn btn-primary m-1" onClick=QuitarG("${valor}")>`;
    ++id;
  });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
                //! Paises Function
selectPaises.addEventListener("change", (e) => {
  let paisSelected = selectPaises.value;
  setPaises.push(paisSelected);
  paisesArr.splice(paisesArr.indexOf(paisSelected), 1);
  paisesList(paisesArr,selectPaises);
  paisesBtn(setPaises,paisesbtn);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
function QuitarP(value) {
  document.getElementById(`${value}`).remove();
  setPaises.splice(setPaises.indexOf(value), 1);
  paisesBtn(setPaises,paisesbtn);
  paisesArr.splice(0, 0, `${value}`);
  paisesList(paisesArr,selectPaises);
  paisesArr.sort();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
const paisesList = (array,print) => {
  print.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    print.innerHTML += `<option selected hidden>Paises</option>
                        <option>${array[i]}</option>`;
  }
};
const paisesBtn = (array,print) => {
  print.innerHTML = "";
  array.forEach((valor) => {
    print.innerHTML += `<input type="button" id="${valor}" value="${valor}" class="btn btn-primary m-1" onClick=QuitarP("${valor}")>`;
  });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
 //! Range Calificador //
let radioValue = 0;
const radio = value =>{
  radioValue = value;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
const movieTitle = document.getElementById('titulo');
const movieDirector = document.getElementById('director');
const movieYear = document.getElementById('año');
const movieDate = document.getElementById('estreno');
let movieId = 0;
let movieArray = [];
class Movie{
  constructor(array){
    this.array;
    this.aPrint = function () {
      resultadoMovie.innerHTML = ''; 
      for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        let arr = array[i];
        for (let y = 0; y < arr.length; y++) {
          console.log(arr[y]);
          resultadoMovie.innerHTML += `
          <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h4 class="card-title">${arr[1]}</h4>
                <h5 class="card-title">${arr[2]}</h5>
                <p class="card-text">Genero: ${arr[6]}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${arr[3]}</li>
                <li class="list-group-item">${arr[4]}</li>
                <li class="list-group-item">${arr[7]} ★</li>
            </ul>
            <div class="card-body">
              <p class="card-text">Paises a estrenar: ${arr[5]}</p>
            </div>
          </div>`;
          break 
        }
      }  
    }
  }
}

movieBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  let error = validarCampos();
  if (error[0]) {
    alertMsg.innerHTML = error[1];
    alertMsg.classList.remove('alert-success');
    alertMsg.classList.add('alert-danger');
    invalid()
    Msg();
  }else{
    let prueba = [movieId,movieTitle.value, movieDirector.value, movieYear.value, movieDate.value, setPaises, setGeneros,radioValue];
    let error = existe(movieArray,movieTitle.value,movieDirector.value)
    if (error[0]) {
      alertMsg.innerHTML = error[1];
      invalid()     
      Msg();
    }else{
      movieArray.push(prueba);
      let movie = new Movie(movieArray)
      valid()
      Msg()
      movie.aPrint()
    }
  }
})
const valid = ()=>{
  alertMsg.innerHTML = "Pelicula Guardada correctamente!";
  alertMsg.classList.remove('alert-danger');
  alertMsg.classList.add('alert-success');
  movieTitle.classList.remove('is-invalid');
  movieTitle.classList.add('is-valid');
  movieDirector.classList.remove('is-invalid');
  movieDirector.classList.add('is-valid');
}
const invalid = () =>{
  alertMsg.classList.remove('alert-success');
  alertMsg.classList.add('alert-danger');
  movieTitle.classList.remove('is-valid');
  movieTitle.classList.add('is-invalid');
  movieDirector.classList.remove('is-valid');
  movieDirector.classList.add('is-invalid');
}
const Msg = () =>{
  setTimeout(() => {
    alertMsg.classList.remove('alert-danger');
    alertMsg.classList.remove('alert-success');
    alertMsg.innerHTML = "";
    }, 4000);
}
const existe = (array,value1,value2) =>{
  let error= [];
  let num = 0;
  if (array.length === 0) {
    console.log("array 0 paso por aqui");
    return error    
  }else{
    for (let i = 0; i < array.length; i++) {
      let arrayValue = array[i];      
      if ( arrayValue.indexOf(value1) == 1 && arrayValue.indexOf(value2) == 2) {
        error[0] = true;
        error[1] = "Esta pelicula ya ah sido agregada";
        return error
      }
    }
  }
  return error
}
const validarCampos = ()=>{
  let error = [];
  if (movieTitle.value.length == 0) {
    error[0] = true;
    error[1] = "Introduzca un Titulo para la pelicula"
    movieTitle.classList.remove('is-valid');
    movieTitle.classList.add('is-invalid');
  }else if (movieTitle.value.length > 50) {
    error[0] = true;
    error[1] = "El Titulo para la pelicula, es demasiado Largo"
    movieTitle.classList.remove('is-valid');
    movieTitle.classList.add('is-invalid');
  }else{
    movieTitle.classList.remove('is-invalid');
    movieTitle.classList.add('is-valid');
  }if (movieDirector.value.length == 0) {
    error[0] = true;
    error[1] = "Introduzca el nombre del Director"
    movieDirector.classList.remove('is-valid');
    movieDirector.classList.add('is-invalid');
  }else if (movieDirector.value.length > 50) {
    error[0] = true;
    error[1] = "El nombre del Director, es demasiado Largo"
    movieDirector.classList.remove('is-valid');
    movieDirector.classList.add('is-invalid');
  }else{
    movieDirector.classList.remove('is-invalid');
    movieDirector.classList.add('is-valid');
  }if (movieDate.value.length == 0) {
    error[0] = true;
    error[1] = "Introduzca la fecha de estreno para la pelicula"
    movieDate.classList.remove('is-valid');
    movieDate.classList.add('is-invalid');
  }else{
    movieDate.classList.remove('is-invalid');
    movieDate.classList.add('is-valid');
  }if (setPaises.length == 0) {
    error[0] = true;
    error[1] = "Seleccione el Pais o los Paises para su estreno"
    selectPaises.classList.remove('is-valid');
    selectPaises.classList.add('is-invalid');
  }else{
    selectPaises.classList.remove('is-invalid');
    selectPaises.classList.add('is-valid');
  }if (setGeneros.length == 0) {
    error[0] = true;
    error[1] = "Seleccione el Genero o los Generos para su estreno"
    selectGeneros.classList.remove('is-valid');
    selectGeneros.classList.add('is-invalid');
  }else{
    selectGeneros.classList.remove('is-invalid');
    selectGeneros.classList.add('is-valid');
  }if (radioValue == 0) {
    error[0] = true;
    error[1] = "Califique La pelicula"
  }
  return error
}
const showMovie = document.getElementById('showMovie');
const resultadoMovie = document.getElementById('resultadoMovie');




// let array =[[1,2,3,4,5],[6,7,8,9,0]]

// console.log(array);

// for (let i = 0; i < array.length; i++) {
//   if (array[i].indexOf(1) == 0) {
//     console.log(array[i]);
//     console.log("te encontre hijo de puta");
//     break
//   }else{
//     console.log(array[i]);
//     console.log("Aun no te encontro hijo de puta");
//   }
  
// }

// class Pelicula{
//   constructor(id,titulo,director,año,estreno,pais,genero,calif)

// }

//! <!-- 27) Programa una clase llamada Pelicula.
//*     La clase recibira un objeto al momento de instanciarse con los siguientes datos: id de la pelicula
//*     en IMDB, titulo, director, año de estreno, pais o paises de origen, generos y calificacion en IMBD.
//? - Todos los datos del objeto son obligatorios.
//? - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes numeros.
//? - Valida que el titulo no rebase los 100 caracteres.
//? - Valida que el director no rebase los 50 caracteres.
//? - Valida que el año de estreno sea un numero entero de 4 digitos.
//? - Valida que el pais o paises sea introducido en forma de arreglo.
//? - Valida que los generos sean introducidos en forma de arreglo.
//? - Valida que los generos introducidos esten dentro de los generos aceptados*.
//? - Crea un metodo estatico que devuelva los generos aceptados*.
//? - Valida que la calificacion sea un numero entre 0 y 10 pudiendo ser decimal de una posicion.
//? - Crea un metodo que devuelva toda la ficha tecnica de la pelicula.
//? - Apartir de un arreglo con la informacion de 3 peliculas genera 3 instancias de la clase de forma automatizada
//?   e imprime la ficha tecnica de cada pelicula.

//*     Generos Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family,
//*     Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, 
//*     Short, Sport, Talk-Show, Thirller, War, Westen. -->
