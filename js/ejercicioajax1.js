import DOMAjax from "./moduleajax/ajaxaxios.js"
import { clickDom } from "./moduleajax/clicklink.js"

addEventListener('DOMContentLoaded',e=>{
    clickDom('.tec',
            '.ani',
            '.peo',
            '.arch',
            '.nat');
    DOMAjax()
})


