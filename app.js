const input = document.querySelector('#text');
const textarea = document.querySelector('textarea');
const textEncrip = document.querySelector('#textEncrip');
const btnEnc = document.querySelector('#btnEnc');
const btnDes = document.querySelector('#btnDes');
const result = document.querySelector('#result');
const encrytpResult = document.querySelector('.encrytpResult');
const btnCopi = document.querySelector('.btnCopi');
const msgDes = document.getElementById('result_msgDes');
const msg = document.getElementById('result_msg');

let text = input.value;
const regex = new RegExp(/^[a-z!\s]+$/g);
     
const conver = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat',
};

//Oculpa imagen y elementos 
const hiddens = () => {

    msgDes.style.display = 'none'
    msg.style.display = 'none'
    btnCopi.style.display = 'block'
    textEncrip.style.backgroundImage = 'none';
};
// const buttonImgHiddens = () =>{
//     btnCopi.style.display = 'block'
//     textEncrip.style.backgroundImage = 'none';
// }


        //Encriptar
function encrypt() {

    //valida si el campo no esta vacio
    if (input.value == '') {
        alert('Ingrese un texto para encriptar');
        return textarea.focus();
       
    }
    // valida que no tenga mayusculas y caracteres especiales
    if (!regex.test(input.value))
        return alert("Por favor ingresa solo letras minúsculas y sin acentos");

    let text = input.value;
    let textEncrypt = text
        .replaceAll('i', conver.i)
        .replaceAll('o', conver.o)
        .replaceAll('u', conver.u)
        .replaceAll('e', conver.e)
        .replaceAll('a', conver.a);
        hiddens();
    textEncrip.value = textEncrypt;
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
    let regex = new RegExp(/^[a-z!\s]+$/g);
    if (!regex.test(input.value))
        return alert("Por favor ingresa solo letras minúsculas y sin acentos");

    let text = input.value
    let textDecrypt = text
        .replaceAll(conver.a, 'a')
        .replaceAll(conver.e, 'e')
        .replaceAll(conver.o, 'o')
        .replaceAll(conver.i, 'i')
        .replaceAll(conver.u, 'u');
    hiddens();
    textEncrip.value = textDecrypt;
    input.value = '';
};

        // copiar texto encriptado y recarga la pagina
function copiText(){
   let copi = document.getElementById('textEncrip').value;
   navigator.clipboard.writeText(copi);
   location.reload();
};


//llamada a las funciones

btnEnc.addEventListener('click', encrypt);
btnDes.addEventListener('click', decrypt);
btnCopi.addEventListener('click',copiText);