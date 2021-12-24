export async function CallPokemon(json) {
    const $pokemons = document.querySelector('.Pokemons'),
        $template = document.querySelector('template').content,
        $fragment = document.createDocumentFragment();

    for (let i = 0; i < json.length; i++) {
        let link = json[i].url;
        try {
            let res = await fetch(link),
                pokemon = await res.json();
            if (!res.ok) throw{status:res.status,statusText:res.statusText};
            const $figure = $template.querySelector('figure'),
                $img = $template.querySelector('img'),
                $figcaption = $template.querySelector('figcaption');

            let pokeTypes = pokemon.types;
            let type = []
            pokeTypes.forEach(element => {
                if (element.type.name) type.push(element.type.name);                
            });
            
            $figure.setAttribute('data-pokename',pokemon.name);
            $figure.setAttribute('data-pokeimg',pokemon.sprites.front_default)
            $figure.setAttribute('data-type1',type[0]);
            $figure.setAttribute('data-type2',type[1]);
            $img.src = pokemon.sprites.front_default || `svg/puff.svg`
            // $img.setAttribute('src',`${pokemon.sprites.front_default}`);
            $img.setAttribute('alt',`${pokemon.name}`);
            $figcaption.innerHTML = `${pokemon.name}`;
            
            

            let $clone = document.importNode($template,true);
            $fragment.appendChild($clone);
            $pokemons.appendChild($fragment);
            // console.log($figure);
        } catch (error) {
            console.log(error);
            let message = error.statusText || "Ocurrio un error";

        }
    }











    // for (let i = 0; i < json.length; i++) {
    //     let link = json[i].url;
    //     try {
    //         let res = await fetch(link),
    //         pokemon = await res.json();
    //         console.log(pokemon);
    //         if (!res.ok) throw{status:res.status,statusText:res.statusText};

    //         $pokemons.innerHTML += `
    //             <figure>
    //                 <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    //                 <figcaption>${pokemon.name}</figcaption>
    //             </figure>
    //         `;
    //     } catch (error) {
    //         console.log(error);
    //         let message = error.statusText || "Ocurrio un error";
    //         $pokemons.innerHTML += `
    //             <figure>
    //                 <figcaption>Error ${error.status}: ${message}</figcaption>
    //             </figure>
    //         `;
    //     }
    // }
}