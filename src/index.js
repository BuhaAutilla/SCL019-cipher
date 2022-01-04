import cipher from './cipher.js';

console.log(cipher);

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

document.getElementById('London-button').addEventListener('click', (evt) => openCity(evt, 'London'));
document.getElementById('Paris-button').addEventListener('click', (evt) => openCity(evt, 'Paris'));

var slider = document.getElementById("myRange"); 
var output = document.getElementById("number");
output.innerHTML = slider.value; 

slider.oninput = function() {
    output.innerHTML = slider.value;
}

document.getElementById('inp').oninput = function() {
  let offset = (parseInt(slider.value));
  let str = document.getElementById('inp').value;
  cipher.encode(str, offset);
};

document.getElementById('inpDC').oninput = function() {
  let offset = (parseInt(slider.value));
  let str = document.getElementById('inpDC').value;
  cipher.decode(str, offset);
};