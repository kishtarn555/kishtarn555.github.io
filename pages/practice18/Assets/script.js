
localStorage["USD"] = "cheko"
localStorage["PSWD"] = "cheko123"



function validateLogin() {
    if ($('#user').val() == localStorage["USD"] && $('#pass').val() == localStorage["PSWD"]) {
        alert("Acceso correcto");
    } else {
        alert("Acceso denegado -  Usuario o contraseña incorrectos");
    }
}