import { LoadArtits } from "./loadartist.js";

export function Search(input) {
    input.addEventListener('keypress',async e=>{
        // console.log(e.key);
        if (e.key == 'Enter') {
            LoadArtits(e.target.value)
        }
    })
}