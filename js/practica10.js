    //? DESTRUCTURACION
    //! Sin destructuracion
//  numeros = [1, 2, 3];
//  uno = numeros[0],
//     dos = numeros[1],
//     tres = numeros[2];
// console.log(uno, dos, tres, "Sin destructuracion")
/////////////////////////////
    //! Con destructuracion
//TODO Ejemplo : 1
//  [one, two, three] = numeros;
// console.log(one, two, three, "Con destructuracion");
//TODO Ejemplo : 2
//  persona = {
//     nombre:"Leonardo",
//     apellido:"Monsalves",
//     edad: 27
// }
// let {nombre, edad, apellido} = persona;
// console.log(nombre, apellido, edad)
//////////////////////////////////////////////////////////
    //? OBJETOS LITERALES
    //! Forma basica

// let nombre = "duqusa";
//     edad = 7;

//  perro = {
//     nombre:nombre,
//     edad:edad,
//     ladrar:function() {
//         console.log("guauf!!")
//     }
// }
// console.log(perro);
// perro.ladrar()

    //! Mejor forma
//  dog = {
//     nombre,
//     edad,
//     raza: "callejero",
//     ladrar() {
//         console.log("*ladrar con pobreza")        
//     }
// }
// console.log(dog)
// dog.ladrar()
//////////////////////////////////////////////////////////
    // ? PARAMETROS REST & OPERADOR SPREAD
// function sumar(a,b, ...c) {

//     let resultado = a + b;

//     c.forEach(function (n) {
//         resultado += n
//     });

//     return resultado
// }
// console.log(sumar(1,2,3))
// console.log(sumar(1,2,3,4))
// console.log(sumar(1,2,3,4,5))

//  array1 = [1,2,3,4,5]
//     array2 = [6,7,8,9,0]
//     array3 = [...array1, ...array2]
//     console.log(array3)
//////////////////////////////////////////////////////////
    //? ARROW FUNCTIONS
    //! Function Anonima
//  saludo = function () {
//     console.log("hola")
// }
// saludo()

    //! Function Declarada
// function saludar() {
//     console.log("todo bien?")
// }
// saludar()

    //! Arrow Function
//TODO Metodo original o de varias lineas
//  respuesta1 = ()=>{
//     console.log("Hola Ana");
//     console.log("te encuentas bien?");
//     console.log("adios");
// }
// respuesta1()

//TODO Metodo simple de una sola linea de codigo
//  respuesta2 = ()=> console.log("Hola Boberto");
// respuesta2()

//TODO Cuando la Function Arrow no recibe parametros Tenemos que colocar "()" Obligatoriamente De lo contrario si "solo sí" recivimos un solo parametro Podemos quitar los "()"
//  respuesta3 = nombre => console.log(`Hola ${nombre}`);
// respuesta3("Carlo")
//! -----------------------------------------------------------
//TODO Con las Function Arrow no es necesario colocar un return ya que estas nos retornan el valor automaticamente

//TODO Ejemplo : 1
//   sumarExplicito = (a,b)=>{
//      return a+b;
//  }
//  console.log(sumarExplicito(5,5))

//TODO Ejemplo : 2
//  sumarImplicito = (a,b) => a+b;
// console.log(sumarImplicito(9,9))
//! -----------------------------------------------------------
//TODO Su uso en el forEach
// let numeros = [1,2,3,4,5];
// numeros.forEach((el,index)=>{
//     console.log(`${el} esta en la posición ${index}`)
// })
//! -----------------------------------------------------------
//TODO Las function normales respentan su contenedor objeto

//TODO Ejemplo : 1
// function perro() {
//     console.log(this)
// }
// perro();

// let dog ={
//     nombre:"duquesa",
//     ladrar:function () {
//         console.log(this)
//     }
// } 
// dog.ladrar();
//TODO Mientras que las arrow function "No lo hacen"

//TODO Ejemplo : 2
//  let gato =()=> console.log(this);
//  gato()

//  let cat ={
//     nombre:"Simba",
//     maullar: ()=> {
//         console.log(this)
//     }
// }
// cat.maullar();
//////////////////////////////////////////////////////////
    //? PROTOTIPOS      
    //! Programacion Orientada a Objetos
//TODO Clases - Modelo a seguir para generar instancias

//TODO Objetos - Es una instancia de una clase

//TODO Atributos - Es una caracteristica o propiedad del objeto (Son variables dentro de un Objeto)

//TODO Motodos - Son las acciones que un objeto puede realizar (Son funciones dentro de un objeto)

    //! Función constructora
// function Animal(nombre, genero) {
    //TODO Atributo
//     this.nombre = nombre;
//     this.genero = genero;    
// }
    //TODO Metodos
// Animal.prototype.sonar = function(){
//     console.log("hago sonido");
// } 
// ! -----------------------------------------------------------
    // ? HERENCIA PROTOTIPICA
    //! Herencia Prototipica
// function perro(nombre, genero, tamaño) {
//     this.super = Animal;
//     this.super(nombre,genero);
//     this.tamaño = tamaño;
// }
//TODO Perro esta heredando de Animal
// perro.prototype = new Animal();
// perro.prototype.constructor = perro
//TODO Sobreescritura de metodos del prototipo padre en el hijo
// perro.prototype.sonar = function () {
//     console.log("soy un perro y mi sonido es un ladrido")
// }
// perro.prototype.ladrar = function () {
//     console.log("Guau Guauuu!!!")
// }
// let snoopy = new perro("Snoopy", "Macho", "Mediano"),
//! -----------------------------------------------------------
// let snoopy = new Animal("Snoopy", "Macho"),
//     lolaBunny = new Animal("Lola Bunny", "Hembra");
// console.log(snoopy);
// console.log(lolaBunny);
// snoopy.sonar();
// snoopy.ladrar();
// lolaBunny.sonar();
//////////////////////////////////////////////////////////
    //? CLASES Y HERENCIA
    //! Simplificacion de Programacion Orientada a Objetos
    //! Clase
// class Animal{
    //TODO El constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
    // constructor(nombre, genero){
    //     this.nombre = nombre;
    //     this.genero = genero;
    // }
    //! Metodos
//     sonar(){
//         console.log("hago sonidos");
//     }
//     saludar(){
//         console.log(`Hola me llamo ${this.nombre}`)
//     }
// }
//! -----------------------------------------------------------
    //! Herencia
    // class Perro extends Animal{
    //     constructor(nombre,genero,tamaño){
            //TODO Con el metodo super() se manda a llamar el constructor de la clase padre (Reacer el constructor)
//             super(nombre,genero);
//             this.tamaño = tamaño;
//         }
//         sonar(){
//             console.log("Soy un perro y mi sonido es un ladrido");
//         }
//         ladrar(){
//             console.log("Guau Guauuu!!!");
//         }
//     }

// const mimi = new Animal("Mimi", "Hembra"),
//       scooby = new Perro("Scooby", "Macho", "Gigante");
// console.log(mimi);
// mimi.saludar();
// mimi.sonar();
// console.log(scooby);
// scooby.saludar();
// scooby.sonar();
// scooby.ladrar()
//////////////////////////////////////////////////////////
    //? METODOS ESTATICOS, GETTERS Y SETTERS
// class Animal{
//     constructor(nombre, genero){
//         this.nombre = nombre;
//         this.genero = genero;
//     }
//     sonar(){
//         console.log("hago sonidos");
//     }
//     saludar(){
//         console.log(`Hola me llamo ${this.nombre}`)
//     }
// }
//     class Perro extends Animal{
//         constructor(nombre,genero,tamaño){
//             super(nombre,genero);
//             this.tamaño = tamaño;
//             this.raza = null
//         }
//         sonar(){
//             console.log("Soy un perro y mi sonido es un ladrido");
//         }
//         ladrar(){
//             console.log("Guau Guauuu!!!");
//         }
        //! Metodo estatico
        //TODO Un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase 
        // static queEres(){
        //     console.log("Los perros somos animales mamiferos que pertenecemos a la familia de los caninos.");
        // }
        //TODO Los setters y getters son metodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
        //! Metodo Get
        // get getRaza(){
        //     return this.raza;
        // }
        //! Metodo Set
//         set setRaza(raza){
//             this.raza = raza;
//         }
//     }

// const mimi = new Animal("Mimi", "Hembra"),
//       scooby = new Perro("Scooby", "Macho", "Gigante");
// console.log(mimi);
// mimi.saludar();
// mimi.sonar();
// console.log(scooby);
// scooby.saludar();
// scooby.sonar();
// scooby.ladrar();
// Perro.queEres();
//! Propiedad
//TODO para enviar al get debemos trabajar el valor como propiedad. y de esa manera obtendremos un resultado
// scooby.getRaza = "Gran Danes";
// console.log(scooby.getRaza);
//////////////////////////////////////////////////////////
    //? Objeto Console
// console.log(console);
// console.error("Esto es un error");
// console.warn("esto es un aviso");
// console.info("esto es un mensaje informativo");
// console.log("esto es un registro de lo que ha pasado en nuestra aplicación");

// let nombre = "Leo",
// apellido = "Monsalves",
// edad = 35;

// console.log(nombre);
// console.log(apellido);
// console.log(edad);
// console.log(nombre,apellido,edad);
// console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
//TODO %s "Recive una cadena de texto" Y %d "Recive un dijito" Luego colocamos de forma ordenada las variables que remplazaran los comodines
// console.log('Hola mi nombre es %s %s y tengo %d años', nombre, apellido, edad);

// console.clear() //!Limpia la consola

// console.log(window);
// console.log(document);
// console.dir(window);
// console.dir(document);
// console.clear()

// console.group("Grupo");
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.groupEnd();
// console.clear();

// console.log(console);
// console.table(Object.entries(console).sort());
// console.clear();

// let numero = [1,2,3,4,5],
// vocales = ["a","e","i","o","u"],
// perro = {
//     nombre: "tobi",
//     raza: "aleman",
//     edad: 17
// }
// console.table(numero);
// console.table(vocales);
// console.table(perro);
// console.clear();

// console.time("Cuanto tiempo carga mi codigo?");
// const arreglo = Array(1000000);
// for (let i = 0; i < arreglo.length; i++) {
//     arreglo[i] = i;    
// }
// console.timeEnd("Cuanto tiempo carga mi codigo?");
// console.log(arreglo);
// console.clear()

// for (let i = 0; i <= 100; i++) {
//     console.count("codigo for")
//     console.log(i)    
// }
// console.clear()

// let x = 3,
//     y = 2,
// pruebaXY = "Se espera que X siempre sea menor que Y";

// console.assert(x<y,(x,y,pruebaXY));
//////////////////////////////////////////////////////////
    //? Objeto Date
    //TODO Da la Hora Local
// console.log(Date())

let fecha = new Date();
//TODO Da el dia del mes
// console.log(fecha.getDate());
//TODO Da el dia de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
// console.log(fecha.getDay());
//TODO Da el mes del 0-1-2-3-4-5-6-7-8-9-10-11
// console.log(fecha.getMonth());
//TODO Da el año
// console.log(fecha.getFullYear())
//TODO Da las horas
// console.log(fecha.getHours())
//TODO Da los minutos
// console.log(fecha.getMinutes())
//TODO Da los segundos
// console.log(fecha.getSeconds())
//TODO Da los milisegundos
// console.log(fecha.getMilliseconds())

//TODO Da la hora local
// console.log(fecha.toString())
//TODO Da solo la Fecha
// console.log(fecha.toDateString())

//TODO Da La Fecha y hora (sin uso Horario GMT)
// console.log(fecha.toLocaleString())
//TODO Da solo la Fecha (31/12/9999)
// console.log(fecha.toLocaleDateString())
//TODO Da la Hora
// console.log(fecha.toLocaleTimeString())

//TODO Te da la zona horaria Meridiana (GMT)
// console.log(fecha.getTimezoneOffset())
// console.log(fecha.getUTCFullYear())
// console.log(fecha.getUTCMonth())
// console.log(fecha.getUTCDate())
// console.log(fecha.getUTCDay())
// console.log(fecha.getUTCHours())
// console.log(fecha.getUTCMinutes())
// console.log(fecha.getUTCSeconds())
// console.log(fecha.getUTCMilliseconds())

// console.log(Date.now())

// let cumple = new Date(1994,3,10);
// console.log(cumple)
//////////////////////////////////////////////////////////
     //? OBJETO MATH

//console.log(Math)
//console.log(Math.PI)
//console.log(Math.abs(-7.8)) //TODO No considera si es negativo o positivo, otorga el valor absoluto
//console.log(Math.sign(-7.8)) //TODO Otorga el numero dependiendo del caso, "1" si es positivo, "0" si es cero y "-1" si es negativo
//console.log(Math.ceil(7.4)) //TODO Redonde al numero posterior inmediato
//console.log(Math.floor(7.6)) //TODO Redonde al numero inferior inmediato
//console.log(Math.round(7.5)) //TODO Redonde al numero mas cercano inmediato
//console.log(Math.sqrt(81)) //TODO Saca la raiz cuadrada del numero
//console.log(Math.pow(2,5)) //TODO Eleva al exponencial en este caso el 5
//console.log(Math.random() * 1000) //TODO este valor da un numero ramdon entre 0 y el 1 (En este ejemplo su valor lo podemos multiplicar por Mil)
//console.log(Math.round(Math.random() * 1000)) //TODO en este otro ejemplo usamos el raund para que nos de un numero entero
//////////////////////////////////////////////////////////
    //? ALERT, CONFIRM, PROMPT
    //! Son ventanas intrusivas
// alert("hola")
// confirm("Estas bien?")
// prompt("como te sientes?")
//////////////////////////////////////////////////////////
    //? EXPRESION REGULARES

// let cadena = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In voluptate corporis fuga eius qui odit consequatur autem reiciendis veniam incidunt id voluptatum dolore ducimus repellat non, excepturi at explicabo! Harum?";

// let expReg = new RegExp("Lorem","")
// let expReg2 = /lorem/;

// console.log(expReg.test(cadena))
// console.log(expReg.exec(cadena))
// console.log(expReg2.test(cadena))
// console.log(expReg2.exec(cadena))
//////////////////////////////////////////////////////////
    //? Funciones Anonimas Autoejecutables

    //! Funcion Anonima Autoejecutable
    //TODO la encerramos en un parentesis (sin otorgarle un nombre) de esta manera
// (function(){
//     console.log("Mi Primer Funcion Anonima Autoejecutable")
// })(); //! Este ultimo parentesis es el que ejecuta la funcion

// (function(d,w,c){
//     console.log("Mi Segunda Funcion Anonima Autoejecutable");
//     console.log(d);
//     console.log(w);
//     c.log("Este es un console.log")
// })(document,window,console);

    //TODO Hay cuatro maneras de usar las FAA(Funciones Anonimas Autoejecutables)
    //! 1: Version Clasica
    // (function(){
    //     console.log("Version Clasica")
    // })();
    
    //! 2: Version Crockford (JavaScript: The Good Parts)
    // ((function(){
    //     console.log("Version Crockford (JavaScript: The Good Parts")
    // })());
    
    //! 3: Version Unaria
    // +function(){
    //     console.log("Version Unaria")
    // }();

    //! 4: Version Facebook
    // !function(){
    //     console.log("Version Facebook")
    // }();
//////////////////////////////////////////////////////////
    
