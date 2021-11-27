//1. Esto funciona como el cuerpo
class animal{
    //2. Aqui le damos el valor al objeto dentro del cuerpo
    constructor(especie, edad, color){
        //3. Aqui a cada objeto se le guarda el valor
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        //4. En este caso le damos una accion.
        //   Se aguarda el valor en cada objeto del cuerpo para dar la informacion
        //   de un animal en concreto
        this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}
//5. Aqui "ojo" le estamos otorgangado los valores al cuerpo.
//   Guardamos los valores que se le otorgan dentro de una variable
//   damos una varial a los valores que le queremos otorgar al cuerpo
//   luego mencionamos el cuerpo y luego los valores que le enviaremos
let perro = new animal("perro", 5, "marron");
let gato = new animal("gato", 3, "negro");
let loro = new animal("loro", 1, "verde");

//6. Aqui imprimimos en pantalla la variable que lleva la informacion
//   luego el objeto del cuerpo. Como funciona?
//   La variable tiene 3 valores
//   los tres valores se guarda en el orden en el que el cuerpo recive el valor
//   especie, edad, color. Cuando cada valor es recibido, estos tambn se guardan en
//   un objeto(Los objetos tambien funcionan como acciones).
//   El this.info es un objeto que funciona como una accion que esta guardando
//   los datos otorgados en forma de informacion, por eso al imprimir usamos.
//   (1) La variable que guarda los datos y los envia al cuerpo.
//   (2) Y luego llamamos objeto que esta vez nos funciona como una accion.
// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(loro.info + "<br>");

//   En este caso al implementar una funcion dentro del cuerpo llamamos
//   a la funcion de esta manera y le damos los valores usando las variables
//   y luego llamando a la funcion.
perro.verInfo();
gato.verInfo();
loro.verInfo();

