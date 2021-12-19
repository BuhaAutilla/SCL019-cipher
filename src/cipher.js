const cipher = {
  // ...
};

export default cipher;
//slider

var slider = document.getElementById("myRange"); 
var output = document.getElementById("number");
output.innerHTML = slider.value; 

slider.oninput = function() {
    output.innerHTML = this.value;
}

// for toggle Cipher, slider >=0 run function forward, else run backward
// for toggle decipher, slider >=0 run backward else run forward

//FUNCION Forward
document.getElementById('inp').oninput = function() {
  // const offset = 3;
  let offset = (parseInt(slider.value));
  let str = this.value;
  let out = '';
  for (let i=0; i<str.length; i++){
    let encode = str.charCodeAt(i);
    
    if (encode >= 65 && encode <= 90){
      encode = (encode - 65 + offset) % 26 + 65;
      out += String.fromCharCode(encode);
    
    }
    else if (encode >= 97 && encode <= 122){
      encode = (encode - 97 + offset) % 26 + 97;
      out += String.fromCharCode(encode);
    }
    
    else if (encode >= 48 && encode <= 57){
      encode = (encode - 48 + offset) % 10 + 48;
      out += String.fromCharCode(encode);
    }

    else {
      out += String.fromCharCode(encode);
    }
      
  }
  document.getElementById('outp').innerHTML = out;
}
//ЭТО ДЕШИФРАЦИЯ
document.getElementById('inpDC').oninput = function() {
  const offset = 3;
  let str = this.value;
  let out = '';
  for (let i=0; i<str.length; i++){
    let encodeDC = str.charCodeAt(i);
    
    if (encodeDC >= 65 && encodeDC <= 90){
      encodeDC = (encodeDC - 90 - offset) % 26 + 90;
      out += String.fromCharCode(encodeDC);
    
    }
    else if (encodeDC >= 97 && encodeDC <= 122){
      encodeDC = (encodeDC - 122 - offset) % 26 + 122;
      out += String.fromCharCode(encodeDC);
    }
    
    else if (encodeDC >= 48 && encodeDC <= 57){
      encodeDC = (encodeDC - 57 - offset) % 10 + 57;
      out += String.fromCharCode(encodeDC);
    }

    else {
      out += String.fromCharCode(encodeDC);
    }
      
  }
  document.getElementById('outpDC').innerHTML = out;
}
