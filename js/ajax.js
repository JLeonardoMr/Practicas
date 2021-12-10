(()=>{
    //! XMLHttpRequest
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById('xhr'),
        //! IMPORTANTE
        //? ESTE BETA NOS PERMITE IR ALMACENANDO LO QUE VAMOS A PINTAR EN EL DOM Y CUANDO ESTE COMPLETAMENTE CARGADO, SE MUESTRA
        $framgent = document.createDocumentFragment();
    
    xhr.addEventListener('readystatechange',e=>{
        if (xhr.readyState !== 4) return;
        console.log(xhr);
        if (xhr.status >= 200 && xhr.status < 300){
            console.log('------Exito------');
            // console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText)
            console.log(json);
            json.forEach(element => {
                const $li = document.createElement('li');
                $li.innerHTML = `${element.name}--${element.email}--${element.phone}`
                $framgent.appendChild($li);
            });
            $xhr.appendChild($framgent)
        }else{
            console.log('------Error------');
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        }
    })
    xhr.open('GET','assets/users.js');

    xhr.send();
})();
(()=>{
    //! XMLHttpRequest
    const $fetch = document.getElementById('fetch'),
        //! IMPORTANTE
        //? ESTE BETA NOS PERMITE IR ALMACENANDO LO QUE VAMOS A PINTAR EN EL DOM Y CUANDO ESTE COMPLETAMENTE CARGADO, SE MUESTRA
        $framgent = document.createDocumentFragment();

    // fetch()
})();