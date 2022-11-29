function minor() {
    alert(window.localStorage["lang"]==="es"?"Debes ser mayor de edad":"You must be over 18.");
}
function age() {
    let now = new Date();
    let formDate = new Date($("#birthdate").val());
    let dif = now.getFullYear() - formDate.getFullYear();
    if (dif < 18) {
        return false;
    }
    if (dif > 18) 
        return true;

    if (now.getMonth() > formDate.getMonth())
        return true;
    if (now.getMonth() < formDate.getMonth()) 
        return false;
    

    if (now.getDate() > formDate.getDate())
        return true;
    if (now.getDate() < formDate.getDate()) 
        return false;    
    return false;
}
function validate(form) {
    valid=age();
    if (!valid) {
        minor();
    } else {
        alert("OK");
    }
    return false;
}