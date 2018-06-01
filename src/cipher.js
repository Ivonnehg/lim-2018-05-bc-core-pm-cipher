window.cipher = {
  encode: (string,offset)=>{
    let s=string;
    let o=offset;
    let codeCipher ="";


    for(var i=0;i<s.length;i++){
            var numberCode = s.charCodeAt(i);
            if(65<= numberCode && numberCode <= 90) {
              codeCipher += String.fromCharCode((numberCode - 65 + o)%26 +65);
            }
            else if (numberCode>=97 && numberCode<=122) {
              codeCipher += String.fromCharCode((numberCode - 97 + o)%26 +97);
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
          codeCipher += String.fromCharCode((numberCode + 97 - o+ 14)%26 +97);
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
