(()=>{
    //! XMLHttpRequest
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById('xhr'),
        //! IMPORTANTE
        //? ESTE BETA NOS PERMITE IR ALMACENANDO LO QUE VAMOS A PINTAR EN EL DOM Y CUANDO ESTE COMPLETAMENTE CARGADO, SE MUESTRA
        $framgent = document.createDocumentFragment();
    
    xhr.addEventListener('readystatechange',e=>{
        if (xhr.readyState !== 4) return;
        // console.log(xhr);
        if (xhr.status >= 200 && xhr.status < 300){
            // console.log('------Exito------');
            // console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText)
            // console.log(json);
            json.forEach(element => {
                const $li = document.createElement('li');
                $li.innerHTML = `${element.name}--${element.email}--${element.phone}`
                $framgent.appendChild($li);
            });
            $xhr.appendChild($framgent)
        }else{
            // console.log('------Error------');
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        }
    })
    // xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    xhr.open('GET','js/assets/users.json');
    xhr.send();
})();
(()=>{
    //! FETCH
    const $fetch = document.getElementById('fetch'),
        //! IMPORTANTE
        //? ESTE BETA NOS PERMITE IR ALMACENANDO LO QUE VAMOS A PINTAR EN EL DOM Y CUANDO ESTE COMPLETAMENTE CARGADO, SE MUESTRA
        $framgent = document.createDocumentFragment();

    fetch('js/assets/users.json')
    .then(res=>{
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then(json=>{
        json.forEach(element => {
            const $li = document.createElement('li');
            $li.innerHTML = `${element.id}--${element.username}--${element.website}`
            $framgent.appendChild($li);
        });
        $fetch.appendChild($framgent)
    })
    .catch(err=>{
        // console.log('------ Error ------');
            let message = err.statusText || "Ocurrio un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`
    })
    .finally(()=>{
        // console.log("esto se ejecutara independienteme del resultado de la Promesa Fetch");
    })
})();
(()=>{
    //! FETCH ASYNC
    const $fetchAsync = document.getElementById('fetch-async'),
        //! IMPORTANTE
        //? ESTE BETA NOS PERMITE IR ALMACENANDO LO QUE VAMOS A PINTAR EN EL DOM Y CUANDO ESTE COMPLETAMENTE CARGADO, SE MUESTRA
        $framgent = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch('js/assets/users.json'),
            json = await res.json();
            
            if (!res.ok) throw {status: res.status, statusText: res.statusText};
            
            json.forEach(element => {
                const $li = document.createElement('li');
                $li.innerHTML = `${element.address.city}--${element.address.street}--${element.address.suite}`
                $framgent.appendChild($li);
            });

            $fetchAsync.appendChild($framgent);

        } catch(err) {
            let message = err.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`
        } finally {
            // console.log("esto se ejecutara independienteme del resultado de la Promesa FetchAsync");
        }
    }

    getData()
})();
(()=>{
    //! AXIOS
    const $axios = document.getElementById('axios'),
        //! IMPORTANTE
        //? ESTE BETA NOS PERMITE IR ALMACENANDO LO QUE VAMOS A PINTAR EN EL DOM Y CUANDO ESTE COMPLETAMENTE CARGADO, SE MUESTRA
        $framgent = document.createDocumentFragment();
    axios.get('js/assets/users.json')
    .then((res)=>{
        let json = res.data;

        json.forEach(element => {
            const $li = document.createElement('li');
            $li.innerHTML = `${element.address.city}--${element.address.street}--${element.address.suite}`
            $framgent.appendChild($li);
        });

        $axios.appendChild($framgent);
    })
    .catch((err)=>{
        let message = err.response.statusText || "Ocurrio un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`
    })
    .finally(()=>{
            // console.log("esto se ejecutara independienteme del resultado de la Promesa Axios");
    })
})(); 
(()=>{
    //! AXIOS ASYNC - AWAIT
    const $axios = document.getElementById('axios-async'),
        //! IMPORTANTE
        //? ESTE BETA NOS PERMITE IR ALMACENANDO LO QUE VAMOS A PINTAR EN EL DOM Y CUANDO ESTE COMPLETAMENTE CARGADO, SE MUESTRA
        $framgent = document.createDocumentFragment();
    async function getData() {
        try {
            let res = await axios.get('js/assets/users.json'),
            json = await res.data;
            json.forEach(element => {
                const $li = document.createElement('li');
                $li.innerHTML = `${element.address.city}--${element.address.street}--${element.address.suite}`
                $framgent.appendChild($li);
            });

            $axios.appendChild($framgent);
        } catch (error) {
            let message = err.response.statusText || "Ocurrio un error";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`
        } finally{
            // console.log("esto se ejecutara independienteme del resultado de la Promesa Axios Async");
        }
    }
    getData()
})(); 