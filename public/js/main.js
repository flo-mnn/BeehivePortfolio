// BEEHIVE rotate on click - start

let hexa2 = document.getElementById('hexa2');
let hexaH2 = document.getElementById('hexaH2');
let hexaB2 = document.getElementById('hexaB2');

let allHexa = document.getElementsByClassName('hexa');
let allHexaH = document.getElementsByClassName('hexaH');
let allHexaB = document.getElementsByClassName('hexaB');

for (let i = 0; i < allHexa.length; i++) {
    allHexaH[i].addEventListener('click',function(){

    allHexaB[i].style.transition = "transform 0.9s";
    allHexaB[i].style.transformOrigin = 'center';
    allHexaB[i].style.transformBox = 'fill-box';
    
    allHexa[i].style.transition = 'transform 0.9s, opacity 0.8s';
    allHexa[i].style.transformOrigin = 'center';
    allHexa[i].style.transformBox = 'fill-box';
       
    allHexa[i].classList.toggle('transitionHexa');
    allHexaB[i].classList.toggle('transitionHexaB');
    }); 
};

// BEEHIVE rotate on click - end