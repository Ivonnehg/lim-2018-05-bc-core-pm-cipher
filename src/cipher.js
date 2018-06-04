window.cipher = {//objeto window.cipher con 2 métodos (cifrado y descifrado)
  encode: (string,offset)=>{
    let s=string;//declarar variable s(texto ingresado)
    let o=offset;//declarar variable o(número ingresado)
    let codeCipher ="";


    for(var i=0;i<s.length;i++){
            var numberCode = s.charCodeAt(i);// obtenemos el código ASCII
            if(65<= numberCode && numberCode <= 90) {// condición codigo ASCII (Valores Mayusculas)
              codeCipher += String.fromCharCode((numberCode - 65 + o)%26 +65);//mediante formula obtener nueo codigo ascii, luego convierte a texto
            }
            else if (numberCode>=97 && numberCode<=122) {// condición codigo ASCII (Valores Minusculas)
              codeCipher += String.fromCharCode((numberCode - 97 + o)%26 +97);//mediante formula obtener nueo codigo ascii, luego convierte a texto
            }
            else if(numberCode===32){//condición para que devuelva espacio
              var space = " ";
              codeCipher+=space;
            }
            else{
              codeCipher+=s.chartAt(i);//concatena nueva palabra
            }
               }
               return codeCipher;
             },


//decode
decode: (string,offset)=>{
  let s=string;
  let o=offset;
  let codeCipher ="";

for(var i=0;i<s.length;i++){
        var numberCode = s.charCodeAt(i);
        if(65<= numberCode && numberCode <= 90) {
          codeCipher += String.fromCharCode((numberCode + 65 - o)%26 +65);
        }
        else if (numberCode>=97 && numberCode<=122) {
          codeCipher += String.fromCharCode((numberCode + 97 - o+ 14)%26 +97);//formula para descifrar
        }
        else if(numberCode===32){
          var space = " ";
          codeCipher+=space;
        }
        else{
          codeCipher+=s.chartAt(i);
        }
           }
          return codeCipher;
         },

}
