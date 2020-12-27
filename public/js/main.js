
let hexa2 = document.getElementById('hexa2');
let hexaH2 = document.getElementById('hexaH2');
let hexaB2 = document.getElementById('hexaB2');

let allHexa = document.getElementsByClassName('hexa');
let allHexaH = document.getElementsByClassName('hexaH');
let allHexaB = document.getElementsByClassName('hexaB');

// Beehive Droping effect - start
// on landing page
document.addEventListener('DOMContentLoaded',function(){
    // 1st TimeOut for delay on landing page
    setTimeout(() => {
        for(var i=0; i < allHexa.length; i++){ 
            (function(i) {
                // 2nd time out for each item (each i)
               setTimeout(function(){
                   allHexa[i].classList.add("falling-animation");
                   allHexaB[i].classList.add("falling-animation");

                // 3rd timeout for removing animation and resetting everyting into place
                   setTimeout(() => {
                       allHexa[i].classList.remove('falling-animation');
                        allHexa[i].style.opacity = "1";
                        allHexaB[i].classList.remove('falling-animation');
                        allHexaB[i].style.opacity = "1";
                   }, 1000); // 1000 delay for the reset post animation
                }, i * 120); //120 delay between each hexa falling
            })(i);
        };
    }, 1200); // 1200 delay on landing page
    
});

// Beehive Droping effect - end


// BEEHIVE rotate on click - start
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

    // for falling down effect, opacity to zero to begin
    allHexa[i].style.opacity = "0";
    allHexaB[i].style.opacity = "0";
};

// BEEHIVE rotate on click - end

// print resume section -start

// Display none VS block


// Delay Anchor Scroll
function delayLink (URL) {
    setTimeout( function() { window.location = URL }, 1000 );
};

// print resume section -end