const usuario = document.getElementById('input-usuario');
const nombreAlumno = document.getElementById('input-nombreAlumno');
const password = document.getElementById('input-password');
const rPassword = document.getElementById('input-rPassword');
const correo = document.getElementById('input-correo');
const telefono = document.getElementById('input-telefono');
const materia = document.getElementById('input-selectMateria');
const condition = document.getElementById('input-condicion');
const alertMsg = document.getElementById('alert-msg');
const boton = document.getElementById('btn-enviar');
const resultado = document.querySelector('.resultado');


boton.addEventListener("click", (e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]) {
        alertMsg.innerHTML = error[1];
        alertMsg.classList.remove('alert-success');
        alertMsg.classList.add('alert-danger');
    }else{
        alertMsg.innerHTML = "Solicitud enviada correctamente!";
        alertMsg.classList.remove('alert-danger');
        alertMsg.classList.add('alert-success');        
        formularios = [{
                    usuario: usuario.value,
                    nombre: nombreAlumno.value,
                    correo: correo.value,
                    telefono: telefono.value,
                    materia: materia.value}];
        for (const formulario in formularios) {
            let datos = formularios[formulario];
            let nombre = datos["nombre"];
            let usu = datos["usuario"];
            let email = datos["correo"];
            let tlf = datos["telefono"];
            let mate = datos["materia"];
            let htmlcode = `
            <ul class="list-group col-5 mb-2">
                <li class="list-group-item active">${nombre}</li>
                <li class="list-group-item">${usu}</li>
                <li class="list-group-item">${email}</li>
                <li class="list-group-item">${tlf}</li>
                <li class="list-group-item">${mate}</li>
            </ul>
            `;
            resultado.innerHTML += htmlcode;
            console.log(formularios[formulario])
        }
    }
})
rPassword.addEventListener("change", (e)=>{
    e.preventDefault();
    let error = []
    if (rPassword.value.length > 7 && rPassword.value === password.value) {
        rPassword.classList.remove('is-invalid');
        rPassword.classList.add('is-valid');
    }else{
        error[0] = true;
        error[1] = "las contraseñas no son iguales!"
        rPassword.classList.remove('is-valid');
        rPassword.classList.add('is-invalid');
    }
    return error
})
const validarCampos = ()=>{
    let error = [];
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let regexTel = /[+]\d{12}/;
    let stringMateria = "Materia";
    let formularios = [];
    if (usuario.value.length < 4 || 
        usuario.value.length > 18 ||
        usuario.value.length == 0) {
        error[0] = true;
        error[1] = "El usuario no puede contener menos de 4 o mas de 18 caracteres"
        usuario.classList.remove('is-valid');
        usuario.classList.add('is-invalid');
    }else{
        usuario.classList.remove('is-invalid');
        usuario.classList.add('is-valid');
    } if (nombreAlumno.value.length == 0) {
        error[0] = true;
        error[1] = "Verifique y coloque su nombre correctamente!"
        nombreAlumno.classList.remove('is-valid');
        nombreAlumno.classList.add('is-invalid');
    }else{
        nombreAlumno.classList.remove('is-invalid');
        nombreAlumno.classList.add('is-valid');
    } if (password.value.length < 8) {
        error[0] = true;
        error[1] = "Verifique y coloque su contraseña"
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
    }else{
        password.classList.remove('is-invalid');
        password.classList.add('is-valid')
    } if (rPassword.value.length > 7 && rPassword.value === password.value) {
        rPassword.classList.remove('is-invalid');
        rPassword.classList.add('is-valid');
    }else{
        error[0] = true;
        error[1] = "las contraseñas no son iguales!"
        rPassword.classList.remove('is-valid');
        rPassword.classList.add('is-invalid');
    } if (!regexEmail.test(correo.value)) {
        error[0] = true;
        error[1] = "Verifique y coloque su correo correctamente"
        correo.classList.remove('is-valid');
        correo.classList.add('is-invalid');
    }else{
        correo.classList.remove('is-invalid');
        correo.classList.add('is-valid');
    } if (!regexTel.test(telefono.value)) {
        error[0] = true;
        error[1] = "Verifique y coloque su telefono correctamente"
        telefono.classList.remove('is-valid');
        telefono.classList.add('is-invalid');
    }else{
        telefono.classList.remove('is-invalid');
        telefono.classList.add('is-valid');
    } if (materia.value == stringMateria) {
        error[0] = true;
        error[1] = "Seleccione una materia"
        materia.classList.remove('is-valid');
        materia.classList.add('is-invalid');
    }else{
        materia.classList.remove('is-invalid');
        materia.classList.add('is-valid');
    } if (condition.checked){
    } else{
        error[0] = true;
        error[1] = "¿Esta usted de acuardo?"
    }
    return error
}
telefono.addEventListener('input', (e) => {
    let target = e.target, length = target.value.length
    target.value = target.value.replace(/[^+0-9]/g, '').replace(/[+]\d{13}/, '');
})



// document.getElementById('iban').addEventListener('input', function (e) {
//     e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
//   });

// [+0-9]{3}[0-9]{3}[0-9]{7}


// is-valid is-invalid
