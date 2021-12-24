export function PokeShow() {
    const $pokeShow = document.querySelector('.pokeShow');
    $pokeShow.innerHTML = `
    <figure class='PokeShow_figure'>
        <img src="./svg/puff.svg" alt="Loading...">
        <div></div>
        <figcaption></figcaption>
    </figure>
    `;

    addEventListener('click',e=>{
        if (e.target.matches('[data-pokename] *')) {
            let name = e.target.parentElement.getAttribute('data-pokename'),
                img = e.target.parentElement.getAttribute('data-pokeimg'),
                type1 = e.target.parentElement.getAttribute('data-type1'),
                type2 = e.target.parentElement.getAttribute('data-type2');

            let $figure = document.querySelector('.PokeShow_figure img'),
                $div = document.querySelector('.PokeShow_figure div'),
                $figure2 = document.querySelector('.PokeShow_figure figcaption');
            
            $figure.src = img;
            $figure2.innerHTML = name;
            if (type2 === 'undefined') {
                $div.innerHTML = `<span class='${type1}'>${type1}</span>`
            }else{
                $div.innerHTML = `
                                <span class='${type1}'>${type1}</span>
                                <span class='${type2}'>${type2}</span>
                                `
            }
        }
    })
}