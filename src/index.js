var cifrar= document.getElementById("cifrado");
cifrar.addEventListener("click", encode);
var decifrar= document.getElementById("desifrado");
decifrar.addEventListener("click", decode);
var resetear=document.getElementById("reset");
resetear.addEventListener("click", resetear)
var output=document.getElementById('showResult');



function encode (){
  var s=document.getElementById("string").value;
  var o= document.getElementById("offset").value;
  var codeCipher ="Cifrado-> ";
  var offsetInt = parseInt(o);
  for(var i=0;i<s.length;i++)
           {
          var numbercode = s.charCodeAt(i);
          if(65<= numbercode && numbercode <= 90)
          {codeCipher += String.fromCharCode((numbercode - 65 + offsetInt)%26 +65);}
              else if (numbercode>=97 && numbercode<=122)
              {codeCipher += String.fromCharCode((numbercode - 97 + offsetInt)%26 +97);}
              else
              codeCipher+=s.chartAt(i)
               document.getElementById('showResult').innerHTML=codeCipher;
             }
            }
  function decode (){
    var s=document.getElementById("string").value;
    var o= document.getElementById("offset").value;
    var offsetInt = parseInt(o);
    var codeCipher ="Descifrado-> ";

      for(var i=0;i<s.length;i++){
        var numbercode = s.charCodeAt(i);
        if(65<= numbercode && numbercode <= 90)
        {codeCipher += String.fromCharCode((numbercode + 65 - offsetInt)%26 +65);}
            else if (numbercode>=97 && numbercode<=122){
            codeCipher += String.fromCharCode((numbercode + 97 - offsetInt + 14)%26 +97);}
            else
            codeCipher+=s.chartAt(i)
            document.getElementById('showResult').innerHTML=codeCipher;
                                 }
                      }
