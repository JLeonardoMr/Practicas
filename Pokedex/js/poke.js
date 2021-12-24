import { OpenDex } from "./module/openDex.js";
import { PokeNav } from "./module/pokenav.js";
import { PokePage } from "./module/resize.js";

const $body = document.querySelector('.pokeBody'),
    $pokeUp = document.querySelector('.pokeUp'),
    $pokeDown= document.querySelector('.pokeDown'),
    $pokePage = document.querySelector('.pokePage'),
    $pokemons = document.querySelector('.pokemons'),
    $pokeNav = document.querySelector('.pokeNav'),
    $pokeBtn = document.querySelector('.PokeDex-btn');
    

addEventListener('DOMContentLoaded',e=>{
    PokePage($pokeUp,$pokeDown,$body,$pokePage,$pokeBtn);
    OpenDex();
    PokeNav();
})





