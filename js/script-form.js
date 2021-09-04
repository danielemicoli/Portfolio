function validate(){
    let name = document.querySelector("name");
    let email = document.querySelector("email");
    let message = document.querySelector("message");
    let errorBox = document.querySelector("errorMessage");

// Check Name

if(name.value == ""){
    errorBox.innerHTML =  alertDiv + '<strong> Attento!</strong> Hai dimenticato di inserire il nome.' + "</div>"
    return false;
    
}
// Check Email
if(email.value == ""){
    errorBox.innerHTML =  alertDiv + '<strong> Attento!</strong> Hai dimenticato di inserire la mail' + "</div>"

    return false;
}

// Check Message
if(message.value == ""){
    errorBox.innerHTML =  alertDiv + '<strong> Attento!</strong> Hai dimenticato di inserire il messaggio' + "</div>"

    return false;
}
return true
}
