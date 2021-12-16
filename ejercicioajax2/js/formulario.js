const $name = document.getElementById('nombre'),
    $email = document.getElementById('email'),
    $issue = document.getElementById('asunto'),
    $coment = document.getElementById('textarea'),
    $btn = document.getElementById('btn'),
    $form = document.querySelector('.sec1_content-form')

$btn.addEventListener('click',e=>{
    let error = validarCampos();
    if (error[0]) {
        let $alertMsg = document.createElement('span');
        error[3].insertAdjacentElement('afterend',$alertMsg);
        $alertMsg.classList.add('alert-error');
        $alertMsg.innerHTML = `${error[1]}`;
        setTimeout(() => {
            let alert = document.querySelector('.alert-error');
            let alertRemove = alert.parentNode
            alertRemove.removeChild(alert)
        }, 3000);
    }
})

const validarCampos = ()=>{
    let error = [];
    const expReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if ($name.value.length < 4 ) {
        error[0] = true;
        error[1] = "El nombre no puede contener menos de 4 caracteres";
        error[3] = $name;
        $name.classList.remove('valid');
        $name.classList.add('invalid');
    }else{
        $name.classList.remove('invalid');
        $name.classList.add('valid');
    }
    if (!expReg.test($email.value)) {
        error[0] = true;
        error[1] = "Verifique que su correo este bien escrito";
        error[3] = $email;
        $email.classList.remove('valid');
        $email.classList.add('invalid');
    }else{
        $email.classList.remove('invalid');
        $email.classList.add('valid');
    }
    if ($issue.value.length <4) {
        error[0] = true;
        error[1] = "El asunto no puede contener menos de 4 caracteres";
        error[3] = $issue;
        $issue.classList.remove('valid');
        $issue.classList.add('invalid');
    }else{
        $issue.classList.remove('invalid');
        $issue.classList.add('valid');
    }
    if ($coment.value.length === 0) {
        error[0] = true;
        error[1] = "La caja de comentarios no se puede enviar Vacia";
        error[3] = $coment;
        $coment.classList.remove('valid');
        $coment.classList.add('invalid');
    }else{
        $coment.classList.remove('invalid');
        $coment.classList.add('valid');
    }
    return error
}


document.addEventListener('submit',e=>{
    e.preventDefault();
    //! AQUI GUARDO TODOS LOS VALORES DE MI FORMULARIO
    //! NAME="KEY" "O MEJOR DICHO" EL VALOR DEL ATRIBUTO
    //! Y "VALUE" EL VALOR DEL INPUT 
    //! HACIENDO UN {KEY:"VALUE"} DE TODOS LOS INPUT
    const formData = new FormData(e.target)
    //? fetch("https://formsubmit.co/ajax/jhondri1004@gmail.com",{
    fetch("php/form.php",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        //! AQUI LO AGREGO COMO UNA VARIABLE
        //! PARA MANDARLO EN FORMATO JSON
        // body:JSON.stringify(formData)
        //? este es para el localhost
        boby:formData,
        //? 'cors' este beta es para los email desde el servido es importante
        // mode:'cors'
    })
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
        let $alertMsg = document.createElement('span');
        $form.insertAdjacentElement('beforeend',$alertMsg);
        $alertMsg.classList.add('alert-success');
        $alertMsg.innerHTML = `Exito al enviar su comentario`;
        setTimeout(() => {
            let alert = document.querySelector('.alert-success');
            let alertRemove = alert.parentNode
            alertRemove.removeChild(alert)
        }, 3000);
        $form.reset()
    })
    .catch(error=>{
        console.log(error);
    });
})