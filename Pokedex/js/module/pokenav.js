import { loadPokemons } from "./loadpokemons.js";

export function PokeNav() {
    document.addEventListener('click',e=>{
        e.preventDefault();
        if (e.target.matches('.pokeNav a')) {
            let link = e.target.getAttribute('href')
            loadPokemons(link)
            let pokemons = document.querySelector('.Pokemons');
            pokemons.innerHTML = "";
        }
    })
}