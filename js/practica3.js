let numero = 0;
//es un bucle que pregunda y luego ejecuta
while(numero < 10){
    numero++;
    document.write(numero + "+");
    if (numero == 10){
        break
    };
};
//es un bucle que ejecuta y luego pregunta
do{
    document.write(numero + "-");
    numero--;
}while (numero > 0);
//declaracion e inicializacion
//condicion
//iteracion (incremento o decremento)
for(let i = 0; i < 10; i++ ){
document.write(i + `<br>`);
};

for(let i = 10; i > 0; i--){

    if( i == 4 ){
        continue;
    }
    document.write(i + "-")

}

let animales = ["perro", "gato", "loro", "tiburon"];
document.write(`<br>`);
//este nos muestra la posicion
for (animal in animales){
    document.write(animal + ", ");
}
document.write(`<br>`);
//este nos muestra el valor de la posicion
for (animal of animales){
    document.write(animal + ", ");
}
document.write(`<br>`);

array1 = ["maria", "josefa", "roberta"];
array2 = ["marcelo", "jose", array1];
for(let array in array2){
    if (array == 2){
        for (let array of array1){
            document.write(array + ", ");
        }
    } else {
        document.write(array2[array] + ", ");
    }
}