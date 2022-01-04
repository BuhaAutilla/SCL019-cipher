const cipher = {
 encode:(str, offset) => {
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
},

  decode:(str, offset) => {
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
    },

  };

export default cipher;



// for toggle Cipher, slider >=0 run function forward, else run backward
// for toggle decipher, slider >=0 run backward else run forward
