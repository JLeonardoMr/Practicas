<?php
if (isset($_POST)) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comment = $_POST["comment"];

    $domain = $_SERVER["HTTP_HOST"];
    $to = "jhondri1004@gmail.com";
    $subjext = "Contacto desde el formulario del sitio $domain.";
    $message = `
    <p>Contacto desde el formulario del sitio<b></b>$domain</p>
    <ul>
        <li>Nombre:<b>$name</b></li>
        <li>Correo:<b>$email</b></li>
        <li>Comentario<b>$comment</b></li>
    </ul>
    `;
    $headers = "MIME-Version:1.0\r\n"."Content-Type:text/html;charset=utf-8\r\n"."From:Envio Automatico No Responder <no-reply@$domain>";

    $send_mail = mail($to,$subjext,$message,$headers);
    if ($send_mail) {
        $res = [
            "error" => false,
            "message" => "Tus datos han sido enviados"
        ];
    }else {
        $res = [
            "error" => true,
            "message" => "Error al enviar tus datos"
        ];
    }
    //? ESTO LO VOY A USAR CUANDO VAYA A MANDAR ALGO DESDE EL SERVIDOR OJOOOOO OOOOJJOOOO
    //! CON EL * RECIVIMOS PETICIONES DE TODO EL QUE QUIERA
    header("Access-Control-Allow-Origin:*")
    //! DE ESTA MANERA ESPECIFICO QUE DOMINIO QUIERO RECIVIR LA PETICION
    // header("Access-Control-Allow-Origin:https://ejemplo.com")

    //? ////////////////////////////////////////
    header("Content-type:aplication/json");
    echo json_encode($res);
    exit;
}
