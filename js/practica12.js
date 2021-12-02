    //!DOM: Nodos, Elementos y Selectores
/*
console.log(document.getElementById('menu'));
/////////////////////////////////////////////
console.log(document.querySelector('#queEs'));
//NO LO USARE PORQUE ES MAS LENTO QUE getElementById
/////////////////////////////////////////////
//? De esta manera lo usaremos una que otra vez
console.log("************************************************");
console.log("agarro todo lo que esta dentro de un id o class");
console.log(document.querySelectorAll('#menu li'));
console.log("************************************************");
/////////////////////////////////////////////
console.log("************************************************");
console.log("agarro el primer li que encuentre");
console.log(document.querySelector('li'));
console.log("agarro todos los li que encuentre");
console.log(document.querySelectorAll('li'));
console.log("************************************************");
console.log("************************************************");
console.log("agarro la primera classe cards que encuentre");
console.log(document.querySelector('.cards'));
console.log("agarro todas las classe cards que encuentre");
console.log(document.querySelectorAll('.cards'));
console.log("************************************************");
console.log("************************************************");
console.log("Agrero a todas las class cards otra class='Elpepe'");
document.querySelectorAll('.cards').forEach(el=> el.classList.add('Elpepe'))
console.log("agarro todas las classe 'Elpepe' que encuentre");
console.log(document.querySelectorAll('.Elpepe'));
console.log("Busco la class Elpepe en la posicion 3 (array[3])");
console.log(document.querySelectorAll('.Elpepe')[3]);//accede a la posicion 3
console.log("************************************************");
*/
/////////////////////////////////////////////////////////////////////////////////
    //!DOM: Atributos y Data-Attributes
//? Atributos

// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));

// console.log(document.querySelector('.link-practica_12').href);
// console.log(document.querySelector('.link-practica_12').getAttribute('href'));

// document.documentElement.lang = "es";
// console.log(document.documentElement.lang);

// document.documentElement.setAttribute("lang","es-VE");
// console.log(document.documentElement.getAttribute("lang"));

// const $LinkDOM = document.querySelector('.link-practica_12');
// $LinkDOM.setAttribute('target','_blank');
// $LinkDOM.setAttribute('rel','noopener');
// console.log($LinkDOM.hasAttribute('rel','noopener'));
// console.log($LinkDOM);

// $LinkDOM.removeAttribute('rel')
// console.log($LinkDOM.hasAttribute('rel','noopener'));
// console.log($LinkDOM);
// console.log("****************************************");
// //? Data-Attributes

// console.log($LinkDOM.getAttribute("data-description"));
// console.log($LinkDOM.dataset);
// console.log($LinkDOM.dataset.description);
// $LinkDOM.setAttribute('data-description', 'Modelo de Objeto del Documento')
// console.log($LinkDOM.dataset.description);
// $LinkDOM.dataset.description = 'Elpepe Marihuano'
// console.log($LinkDOM.dataset.description);

/////////////////////////////////////////////////////////////////////////////////
    //!DOM: Estilos y Variables CSS

const $LinkDOM = document.querySelector('.link-practica_12');
console.log($LinkDOM.style);
console.log($LinkDOM.getAttribute('style'));
console.log($LinkDOM.style.backgroundColor);
console.log($LinkDOM.style.color);
console.log(window.getComputedStyle($LinkDOM));
console.log(getComputedStyle($LinkDOM).getPropertyValue('color'));

$LinkDOM.style.setProperty('text-decoration','none');
$LinkDOM.style.setProperty('display','block');
$LinkDOM.style.width = '50%';
$LinkDOM.style.textAlign = 'center';
$LinkDOM.style.marginLeft = 'auto';
$LinkDOM.style.marginRight = 'auto';

//? Variables CSS
const $html = document.documentElement,
    $body = document.body;
let varGreenColor = getComputedStyle($html).getPropertyValue('--green-color'),
    varSlateBlueColor = getComputedStyle($html).getPropertyValue('--slateBlue-color');
console.log(varGreenColor,varSlateBlueColor);
$body.style.backgroundColor = varSlateBlueColor;
$body.style.color = varGreenColor;

$html.style.setProperty('--green-color', "pink")
varGreenColor = getComputedStyle($html).getPropertyValue('--green-color');
$body.style.setProperty('color', varGreenColor);
/////////////////////////////////////////////////////////////////////////////////
    //! DOM: Clases CSS 

const $rotate = document.getElementById('rotate'), $c1 = document.querySelector('.c1'), $c2 = document.querySelector('.c2'), $c3 = document.querySelector('.c3'), $c4 = document.querySelector('.c4'), $c5 = document.querySelector('.c5'), $c6 = document.querySelector('.c6'), $c7 = document.querySelector('.c7'), $c8 = document.querySelector('.c8');


$c1.addEventListener('click',(e)=>{
    //OJITO DICE SI TIENE EL BETA O NO
    console.log($rotate.classList.contains('rotate_place-4'));
    //OJO este quita si sitiene y si no te da Rovin Hub 
    //$rotate.classList.toggle('rotate_place-1');
    //////////////////////////
    $rotate.classList.remove('rotate_place-2','rotate_place-3','rotate_place-4','rotate_place-5','rotate_place-6','rotate_place-7','rotate_place-8');
    $rotate.classList.add('rotate_place-1');
})
$c2.addEventListener('click',(e)=>{
    $rotate.classList.remove('rotate_place-1','rotate_place-3','rotate_place-4','rotate_place-5','rotate_place-6','rotate_place-7','rotate_place-8');
    $rotate.classList.add('rotate_place-2');
})
$c3.addEventListener('click',(e)=>{
    $rotate.classList.remove('rotate_place-2','rotate_place-1','rotate_place-4','rotate_place-5','rotate_place-6','rotate_place-7','rotate_place-8');
    $rotate.classList.add('rotate_place-3');
})
$c4.addEventListener('click',(e)=>{
    $rotate.classList.remove('rotate_place-2','rotate_place-3','rotate_place-1','rotate_place-5','rotate_place-6','rotate_place-7','rotate_place-8');
    $rotate.classList.add('rotate_place-4');
})
$c5.addEventListener('click',(e)=>{
    $rotate.classList.remove('rotate_place-2','rotate_place-3','rotate_place-4','rotate_place-1','rotate_place-6','rotate_place-7','rotate_place-8');
    $rotate.classList.add('rotate_place-5');
})
$c6.addEventListener('click',(e)=>{
    if ($rotate.hasAttribute('class','')) {
        
    }
    $rotate.classList.remove('rotate_place-1','rotate_place-2','rotate_place-3','rotate_place-4','rotate_place-5','rotate_place-7','rotate_place-8'),
    $rotate.classList.add('rotate_place-6');
})
$c7.addEventListener('click',(e)=>{
    $rotate.classList.remove('rotate_place-2','rotate_place-3','rotate_place-4','rotate_place-5','rotate_place-6','rotate_place-1','rotate_place-8');
    $rotate.classList.add('rotate_place-7');
})
$c8.addEventListener('click',(e)=>{
    $rotate.classList.remove('rotate_place-2','rotate_place-3','rotate_place-4','rotate_place-5','rotate_place-6','rotate_place-7','rotate_place-1');
    $rotate.classList.add('rotate_place-8');
})
/////////////////////////////////////////////////////////////////////////////////

    //! DOM: Traversing: Recocciendo el DOM

// const $cards = document.querySelector(".cards");

// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);
// console.log($cards.closest("div"));
// console.log($cards.closest("body"));
/////////////////////////////////////////////////////////////////////////////////

//     //! DOM: Creando Elementos y Fragmentos

// const $figure = document.createElement("figure"),
//     $img = document.createElement('img'),
//     $figcaption = document.createElement('figcaption'),
//     $figcaptionText= document.createTextNode('Animals'), $cards = document.querySelector('.cards-container');

// const $figure2 = document.createElement("figure");
// //! ESTA ES UNA MANERA BELLA Y HERMOSA DE CREAR ELEMENTOS
// $img.setAttribute('src','https://placeimg.com/200/200/animal');
// $img.setAttribute('alt','Animal');
// $figure.classList.add('cards');


// $cards.appendChild($figure);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $figcaption.appendChild($figcaptionText)

// ////////////////////////////////////////////
// //! ESTA ES LA MANERA PA FLOJOS XD
// $figure2.innerHTML = `
//     <img src="https://placeimg.com/200/200/people" alt="people">
//     <figcaption>People</figcaption>
// `;
// $figure2.classList.add('cards');
// $cards.appendChild($figure2);
// ////////////////////////////////////////////
// //! METODO PARA CONSUMO DE APIS
// const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
//     $ul = document.createElement('ul');

// document.write("<h3>Estaciones del año</h3>");
// document.body.appendChild($ul);

// estaciones.forEach(el=>{
//     const $li = document.createElement('li');
//     $li.textContent = el;
//     $ul.appendChild($li);
// })
// ////////////////////////////////////////////
// //! METODO PARA CONSUMO DE APIS con InnerHTML
// const continentes = ["America", "africa","Asia","Europa","Ociania"],
// $ul2 = document.createElement("ul");

// document.write("<h3>Continentes del Mundo</h3>");
// document.body.appendChild($ul2);

// continentes.forEach(el=>$ul2.innerHTML += `<li>${el}</li>`);
// ////////////////////////////////////////////
// //! METODO PARA CONSUMO DE APIS con Fragmentos
// //! Esta manera es de agregar es mas bella aun
// const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
// $ul3 = document.createElement('ul'),
// $fragment = document.createDocumentFragment();

// meses.forEach(el => {
//     const $li = document.createElement('li');
//     $li.textContent = el;
//     $fragment.appendChild($li)
// });

// document.write("<h3>Meses del año</h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3)

/////////////////////////////////////////////////////////////////////////////////

    //! DOM: Templates HTML
/*selecciono donde voy a copiar*/
// const $cards = document.querySelector('.cards-container'),
//     /* seleciono lo que voy a copiar */
//     $template = document.getElementById('template-card').content, 
//     /* lo que voy a crear */
//     $fragment = document.createDocumentFragment(),
//     /* el contenido */
//     cardContent = [
//         {
//             title:"Tecnologia",
//             img:"https://placeimg.com/200/200/tech"
//         },
//         {
//             title:"Animales",
//             img:"https://placeimg.com/200/200/animals"
//         },
//         {
//             title:"Arquitectura",
//             img:"https://placeimg.com/200/200/arch"
//         },
//         {
//             title:"Gente",
//             img:"https://placeimg.com/200/200/people"
//         },
//         {
//             title:"Naturaleza",
//             img:"https://placeimg.com/200/200/nature"
//         }
//     ];

//     cardContent.forEach(el => {
//         /* le meto a las imagenes este beta */
//         $template.querySelector('img').setAttribute('src', el.img);
//         /**luego el titulo */
//         $template.querySelector('img').setAttribute('alt', el.title);
//         /*y al final el texto */
//         $template.querySelector('figcaption').textContent = el.title;
//         /** clono el contenido que quiero del template */
//         let $clone = document.importNode($template,true);
//         /*y lo meto en la variable que me va a pintar la vaina*/
//         $fragment.appendChild($clone);
//     });
//     /** Aqui imprimo la vaina */
//     $cards.appendChild($fragment);

/////////////////////////////////////////////////////////////////////////////////

    //! DOM: Modificando Elementos (Old Style)
    //*donde vamos y con lo que vamos a rempalazar la vaina*/
    // const $cards = document.querySelector('.cards-container'),
    //     $newCard = document.createElement('figure'),
    //*     /**aqui clono todo er beta */
    //     $cloneCards = $cards.cloneNode(true);

    // $newCard.innerHTML = `
    //         <img src="https://placeimg.com/200/200/any" alt="Any">
    //         <figcaption>Any</figcaption>
    // `;
    // $newCard.classList.add('cards');
    //* /**aqui remplazamos la vaina */
    // // $cards.replaceChild($newCard,$cards.children[2]);
    //* /** aqui lo agrego al inicio */
    // $cards.insertBefore($newCard,$cards.firstElementChild);
    //* /*aqui elimino el ultimo*/
    // $cards.removeChild($cards.lastElementChild);

    //* /**aqui agrego al clonado */
    // document.body.appendChild($cloneCards);
/////////////////////////////////////////////////////////////////////////////////

    //! DOM: Modificando Elementos (New Style)

//? insertAdjacent...
//* .insertAdjacentElement(position,element)
//* .insertAdjacentHTML(position,html)
//* .insertAdjacentText(position,text)

//? Posiciones:
//* beforebegin(hermano anterior) Osea antes del beta (afuera)
//* afterbegin(primer hijo)
//* beforeend(ultimo hijo)
//* afterend(hermano siguiente) Osea despues del beta (afuera)

// const $cards = document.querySelector('.cards-container'),
//     $newCard = document.createElement('figure');

// let $contentCard = `
//         <img src="https://placeimg.com/200/200/any" alt="Any">
//         <figcaption></figcaption>
// `;
// $newCard.classList.add('cards');

//! .insertAdjacentHTML
// $newCard.insertAdjacentHTML('afterbegin',$contentCard);

//! .insertAdjacentText
// $newCard.querySelector('figcaption').insertAdjacentText('afterbegin','Any')

//! .insertAdjacentElement
//** se inserto antes del cuadro la vaina */
// $cards.insertAdjacentElement('beforebegin',$newCard);
//** se inserto como primer hijo del cuadro la vaina */
// $cards.insertAdjacentElement('afterbegin',$newCard);
//** se inserto como ultimo hijo del cuadro la vaina */
// $cards.insertAdjacentElement('beforeend',$newCard);
//** se inserto despues del cuadro la vaina */
// $cards.insertAdjacentElement('afterend',$newCard);

//? Otra Manera de posicionar:
// $cards.prepend($newCard) //*(hermano anterior) Osea antes del beta (afuera)*/
// $cards.before($newCard) //**(primer hijo) */
// $cards.append($newCard) //**(ultimo hijo) */
// $cards.after($newCard) //*(hermano siguiente) Osea despues del beta (afuera) */

/////////////////////////////////////////////////////////////////////////////////

    //! DOM: Manejadores de Eventos



