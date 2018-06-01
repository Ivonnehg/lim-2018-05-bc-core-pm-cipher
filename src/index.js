//declarar las funciones
var cifrar= document.getElementById("cifrado");
var decifrar= document.getElementById("desifrado");
//utilizar eventos de click
cifrar.addEventListener("click", encode);
decifrar.addEventListener("click", decode);


//funciones


function encode (){
  //declaramos las variables de la funcion
  let s=document.getElementById("string").value;
  let o=parseInt(document.getElementById("offset").value) ;
  let codeCipher=cipher.encode(s,o);
  //para mostrar el resultado
  document.getElementById('showResult').innerHTML=codeCipher;
}

function decode (){
  //declaramos las variables de la funcion
  let s=document.getElementById("string").value;
  let o=parseInt(document.getElementById("offset").value) ;
  let codeCipher=cipher.decode(s,o);
  //para mostrar el resultado
  document.getElementById('showResult').innerHTML=codeCipher;
}
