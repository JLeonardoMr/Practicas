const materiasHTML = document.querySelector(".materias");
const materias = [
    {
        nombre: "Fisica 1",
        nota: 7
    },{
        nombre: "Fisica 2",
        nota: 8
    },{
        nombre: "Fisica 3",
        nota: 9
    },{
        nombre: "Matematica 1",
        nota: 7
    },{
        nombre: "Matematica 2",
        nota: 8
    },{
        nombre: "Matematica 3",
        nota: 9
    }
];

const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        mate = materias[id];
        if (mate == undefined) reject("La materia no existe");
        else setTimeout(()=>{resolve(mate)},Math.random()*200);        
    })
}

// obtenerMateria(1).then(res => console.log(res))
const devolverMaterias = async ()=>{
    let mate = [];
    for (var i = 0; i < materias.length; i++) {
        mate[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${mate[i].nombre}</div>
            <div class="nota">${mate[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}
devolverMaterias()
// QUOTESS
const quotes = [
    {
      text: "Te conviertes en lo que le das a tu atención»",
      author: "Epictecto",
    },
    {
      text: "«Las obras se tienen medio terminadas cuando se han comenzado bien.» ",
      author: "Séneca",
    },
    {
      text: "«Es esencial que recuerdes que la atención que le des a cualquier acción debe ser proporcional a su valor.»",
      author: "Marco Aurelio",
    },
    {
      text: "«No nos atrevemos a muchas cosas porque son difíciles, pero son difíciles porque no nos atrevemos a hacerlas».",
      author: "Séneca",
    },
    {
      text: "«Si logras algo bueno con trabajo duro, el trabajo pasa rápido, pero el bien perdura. Si haces algo vergonzoso en busca del placer, el placer pasa rápidamente, pero la vergüenza perdura.»",
      author: "Musonio Rufo",
    },
    {
      text: "«No te sabotees a ti mismo adoptando involuntariamente actitudes negativas e improductivas a través de tus relaciones con otros.»",
      author: "Epictecto",
    },
    {
      text: "«No hay viento favorable para el que no sabe donde va.»",
      author: "Séneca",
    },
    {
      text: "«¿No sabes que un buen hombre no hace nada por las apariencias, sino por hacer lo correcto?» ",
      author: "Epictecto",
    },
    {
      text: "«La mayoría de lo que hacemos y decimos no es esencial. Pregúntate en cada momento, ¿es esto necesario?» ",
      author: "Marco Aurelio",
    },
    {
      text: "«No es que tengamos poco tiempo, sino que perdemos mucho.»",
      author: "Séneca",
    },
    {
      text: "«Toma este momento. Sumérgete en sus detalles. Responde a esta persona, este desafío, esta acción. Deja las evasiones.» ",
      author: "Epictecto",
    },
    {
      text: "«En cada momento mantén la atención en la tarea que tienes entre manos. Realiza cada tarea como si fuera la última, evitando la distracción, el drama, la vanidad y la queja por tu situación.» ",
      author: "Marco Aurelio",
    },
    {
      text: "«Lo innecesario, aunque cueste solo un poco, es caro».",
      author: "Séneca",
    },
    {
      text: "«Que no te arrastren los accidentes exteriores; procúrate tiempo libre para aprender algo bueno y cesa ya de girar como un trompo.»  ",
      author: "Marco Aurelio",
    },
    {
      text: "«Largo es el camino de la enseñanza por medio de teorías; breve y eficaz por medio de la práctica»",
      author: "Séneca",
    },
  ];
  const quotesELement = document.querySelector(".quotes");
// Load quotes in the DOM
quotes.forEach(quote => {
    const { text, author } = quote
    const quoteTemplate = `
        <section class="quotes-quote">
            <h2 class="quotes-quote__text">${ text }</h2>
            <h5 class="quotes-quote__author">${ author }</h5>
        </section> `
    quotesELement.innerHTML += quoteTemplate
})