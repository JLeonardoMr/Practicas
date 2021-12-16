const UPLOADER = (file) =>{
    // console.log(file);
    const XHR = new XMLHttpRequest(),
        formData = new FormData();
    //este beta recibe todo como un formulario, esto quiere decir que cada archivo que suba quedara registrado como parte de un formulario
    formData.append('file',file);
    // console.log(formData.get('file'));

    XHR.addEventListener('readystatechange',e=>{
        if (XHR.readyState !== 4) return;
        if (XHR.status >= 200 && XHR.status < 300) {
            let json = JSON.parse(XHR.responseText)
        }else{
            let message = XHR.statusText || "Ocurrio un error";
            error(`Error ${XHR.status}: ${message}`);
        }
    })

    XHR.open("POST","php/uploader.php");
    XHR.setRequestHeader('enc-type','multipart/form-data');
    XHR.send(formData);
}

const progressUpload = (file,div) =>{
    const $div = document.querySelector(div),
        $progress = document.createElement('progress'),
        $span = document.createElement('span');
    $progress.value = 0;
    $progress.max = 100;
    $div.insertAdjacentElement('beforeend', $progress);
    $div.insertAdjacentElement('beforeend', $span);
    //Este FileReader detecta los bits cargados de los archivos
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener('progress',e=>{
        // console.log(e);
        let progress = parseInt((e.loaded*100)/e.total)
        $progress.value = progress;
        $span.innerHTML = `<b>${file.name} - ${progress}%</b>`
    })
    fileReader.addEventListener('loadend',e=>{
        // console.log(e);
        UPLOADER(file);
        setTimeout(() => {
            $div.removeChild($progress);
            $div.removeChild($span);
        }, 1000);
    })
}

export function fileList(file,div) {
    const files = Array.from(file.files);
    files.forEach(el => progressUpload(el,div));
}