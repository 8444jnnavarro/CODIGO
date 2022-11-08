function validar() {
    var expRegPhone = /^[0-9]{10}$/;
    var vphone = document.getElementById("phone");
    if (!expRegPhone.exec(vphone.value)) {
        alert("Formato de número telefónico incorrecto");
        document.getElementById("phone").value = "";
        document.getElementById("date").value = "";
    }

    var expRegEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var vemail = document.getElementById("email");
    if (!expRegEmail.exec(vemail.value)) {
        alert("Formato del mail incorrecto");
        document.getElementById("email").value = "";
        document.getElementById("date").value = "";
    }

    if(expRegPhone.exec(vphone.value) && expRegEmail.exec(vemail.value))
    this.form.submit();
}

/*onclick="javascript:close_tab();"*/