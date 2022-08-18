const input = document.querySelector('#text');
const textarea = document.querySelector('textarea');
const btnEnc = document.querySelector('#btnEnc');
const btnDes = document.querySelector('#btnDes');
const result = document.querySelector('#result');
const encrytpResult = document.querySelector('.encrytpResult');
const btnCopi = document.querySelector('.btnCopi');
const msgDes = document.getElementById('result_msgDes').textContent;

let loading = false;
let text = input.value;

const conver = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat',
};

        //Oculpa imagen y elementos 
const hiddens = (prop) => {
    document.getElementById('result_img').style.display = prop;
    document.getElementById('result_msg').style.display = prop;
};


        //Encriptar
function encrypt() {

    //valida si el campo no esta vacio
    if (input.value == '') {
        alert('Ingrese un texto para encriptar');
        return textarea.focus();
       
    }
    // valida que no tenga mayusculas y caracteres especiales
    var regex = new RegExp(/^[a-z!\s]+$/g);
    if (!regex.test(input.value))
        return alert("Por favor ingresa solo letras minúsculas y sin acentos");
    

    loading = true;

    let text = input.value;
    let textEncrypt = text
        .replaceAll('i', conver.i)
        .replaceAll('o', conver.o)
        .replaceAll('u', conver.u)
        .replaceAll('e', conver.e)
        .replaceAll('a', conver.a);

    hiddens('none');
    document.getElementById('result_msgDes').textContent = textEncrypt;
    document.querySelector('.result_btnCopi').style.display = 'flex'
    document.querySelector('.btnCopi').style.display = 'block'
    input.value = '';
};

        // Desencriptar
function decrypt() {
     //valida si el campo no esta vacio
    if (input.value == '') {
        alert('Ingrese un texto para desencriptar');
        return textarea.focus();
       
    }
    // valida que no tenga mayusculas y caracteres especiales
    var regex = new RegExp(/^[a-z!\s]+$/g);
    if (!regex.test(input.value))
        return alert("Por favor ingresa solo letras minúsculas y sin acentos");

    let text = input.value
    let textDecrypt = text
        .replaceAll(conver.a, 'a')
        .replaceAll(conver.e, 'e')
        .replaceAll(conver.o, 'o')
        .replaceAll(conver.i, 'i')
        .replaceAll(conver.u, 'u');
    hiddens('none');
    document.getElementById('result_msgDes').textContent = textDecrypt;
    document.querySelector('.result_btnCopi').style.display = 'flex'
    document.querySelector('.btnCopi').style.display = 'block'
    input.value = '';
    
};

         // copiar texto encriptado
function copiText(e){
   let copi = document.getElementById('result_msgDes').textContent
   navigator.clipboard.writeText(copi);
   document.getElementById('result_msgDes').textContent = msgDes;
   document.querySelector('.result_btnCopi').style.display = 'none'
   hiddens('block');
   textarea.focus();
};


//llamada a las funciones

btnEnc.addEventListener('click', encrypt);
btnDes.addEventListener('click', decrypt);
btnCopi.addEventListener('click',copiText);