$(document).ready(()=>{
    while (true) {
        let input = window.prompt("Password")
        if (input==="123") {
            $("#hida").attr("hidden", "d")
            
            break;
        } else {
            alert("Mala contraseña");
        }
    }
})