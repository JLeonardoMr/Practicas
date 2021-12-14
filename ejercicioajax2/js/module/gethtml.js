export default function getHTML(options) {
    
    let {url,success,error} = options;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange',e=>{
        if (xhr.readyState !==4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let html = xhr.responseText;
            success(html);
        }else{
            let messsage = xhr.statusText || "Ocurrio un error";
            error(`Error ${xhr.status}: ${messsage}`)
        }
    })
    xhr.open('GET',url);
    xhr.setRequestHeader('Content-Type','application/json;charset=utf-8');
    xhr.send();
}