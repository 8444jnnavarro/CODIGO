function ocultar() {
    document.getElementById('log').style.display = 'block';
    document.getElementById('reg').style.display = 'none';
}

function login() {
    document.getElementById('log').style.display = 'block';
    document.getElementById('reg').style.display = 'none';
}

function register() {
    document.getElementById('log').style.display = 'none';
    document.getElementById('reg').style.display = 'block';
}

function close_tab() {
    if (confirm("Desea enviar estos datos?")) {
        window.close();
    }
}

function terceros() {
    document.getElementById('FormRegister').style.display = 'none';
    document.getElementById('FormConf').style.display = 'block';
}

function oculto() {
    document.getElementById('FormRegister').style.display = 'block';
    document.getElementById('FormConf').style.display = 'none';
}

function accionar() {
	var check = document.getElementById('enviar').value;
	console.log(check);
	if(check){
    document.getElementById('enviar').style.display = 'none';
    document.getElementById('enviando').style.display = 'block';
}
}
function ocultarBoton() {
    document.getElementById('enviar').style.display = 'block';
    document.getElementById('enviando').style.display = 'none';
}

function load() {
    window.location.reload();
}

function activar() {
    var check = document.getElementById('miCheck').value;
    console.log(check);
    if (!check) {
            document.getElementById('btn').disabled = true;
    } else {
    	document.getElementById('btn').disabled = false;
    	console.log('V');
    }
}