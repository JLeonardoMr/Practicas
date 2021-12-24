import { loadPokemons } from "./loadpokemons.js";
import { PokeShow } from "./pokeshow.js";

export function OpenDex() {
    const pokeAPI = "https://pokeapi.co/api/v2/pokemon/"

    addEventListener('click',e=>{
        if (e.target.matches('.PokeDex-btn')) {
            document.querySelector('.PokeDex-btn').classList.add('btn-animate');
            setTimeout(() => {
                loadPokemons(pokeAPI)
                document.querySelector('.pokeBody').classList.add('pokeBody-hover');
                document.querySelector('.pokeUp').classList.add('pokeUp-hover');
                document.querySelector('.pokeUp-left').classList.add('pokeUp-left-hover');
                document.querySelector('.pokeUp-center').classList.add('pokeUp-center-hover');
                document.querySelector('.pokeUp-right').classList.add('pokeUp-right-hover');
                document.querySelector('.pokeDown').classList.add('pokeDown-hover');
                document.querySelector('.pokeDown-left').classList.add('pokeDown-left-hover');
                document.querySelector('.pokeDown-center').classList.add('pokeDown-center-hover');
                document.querySelector('.pokeDown-right').classList.add('pokeDown-right-hover');
                document.querySelector('.pokePage').classList.add('pokePage-hover');
                PokeShow()
            }, 2500);
        }
    })
}