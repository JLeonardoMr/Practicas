function Asistencias() {
    let resultado =  document.getElementById('result');
    let alumno = document.getElementById('nombre.a').value;
    let asistencia  = [document.getElementById('1').checked,
                        document.getElementById('2').checked,
                        document.getElementById('3').checked,
                        document.getElementById('4').checked,
                        document.getElementById('5').checked,
                        document.getElementById('6').checked,
                        document.getElementById('7').checked,
                        document.getElementById('8').checked,
                        document.getElementById('9').checked,
                        document.getElementById('10').checked,
                        document.getElementById('11').checked,
                        document.getElementById('12').checked];
    let suma = 0;
    if (alumno == "") {
        document.getElementById('nombre.a').setAttribute("class","form-control is-invalid");
    }else{
        for ( let presente of asistencia) {
            if (presente == true) {
                suma++
            }
        }
        if (suma <=5) {
            var reprobo = "Reprobo por Inacistencia";
        }else{
            reprobo = "";
        }
        //---------------------------------------------------
        resultado.innerHTML =`
            El Alumno <b>${alumno}</b>
            <br>
            __________ Asistencias: <b class="asistencia">${suma}</b>
            <br>
            __________Inacistencias:<b class="f-asistencia">${12 - suma}</b>
            <hr>
            <b>${reprobo}</b>
        `;
        }
    };