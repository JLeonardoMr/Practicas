import { Click} from "./module/loadclick.js";
import { Search } from "./module/search.js";


const SEARCH = document.getElementById('search');

addEventListener('DOMContentLoaded',e=>{
    Search(SEARCH)
    Click()
})
