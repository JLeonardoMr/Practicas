import { CallPokemon } from "./callpokemons.js";

export async function loadPokemons(url) {
    const $pokeNav = document.querySelector('.pokeNav');
    try {
        let res = await fetch(url),
            json = await res.json(),
            $prevLink,
            $nextLink;
            
            if (!res.ok) throw{status:res.status,statusText:res.statusText};

            const pokeCall = json.results;
            CallPokemon(pokeCall)

            $prevLink = json.previous ? `<a id="previous" href="${json.previous}">⏮️ Previous</a>`: "";
            $nextLink = json.next ? `<a id="next" href="${json.next}">Next ⏭️</a>`: "";
            $pokeNav.innerHTML = `${$prevLink} ${$nextLink}`;
            
    } catch (error) {
        console.log(error);
        let message = error.statusText || "Ocurrio un error";
        $pokemons.innerHTML = `<p>Error ${error.status}: ${message}</p>`;
        
    }
}