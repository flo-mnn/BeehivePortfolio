let allHexa = document.getElementsByClassName('hexa');
let allHexaH = document.getElementsByClassName('hexaH');
let allHexaB = document.getElementsByClassName('hexaB');

let allResumeItems = document.querySelectorAll('.resume-item');
// console.log(allResumeItems);
// function even/uneven:
let uneven = (n) => {
    let uneven;
    if (n%2 === 1) {
        uneven = true;
    };
    return uneven;
};



//// Beehive Droping effect - start
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

//// Beehive Droping effect - end


//// BEEHIVE rotate on click - start
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

//// BEEHIVE rotate on click - end


//// PRINT resume section -start

// -display none VS block
for (let i = 0; i < allHexaH.length; i++) {
    let link = allHexaH[i].parentElement;
    link.addEventListener('click',function(){
        allResumeItems[i].classList.toggle('visible');
        
        // check if visible, if yes, put it in an array?
        let allDisplayed = [];
        for (let i = 0; i < allResumeItems.length; i++) {
          let name = allResumeItems[i].getAttribute('class');
          if (name.includes('visible')) {
              allDisplayed.push(allResumeItems[i]);
          }; 
        };

        // check which one in allDisplayed is uneven
        console.log(allDisplayed);
        for (let i = 0; i < allDisplayed.length; i++) {
            let nPlus1 = uneven(i);
            let theOne = allDisplayed[i].querySelector('.resume-item-inner');
            if (nPlus1 === true) {
                theOne.style.flexDirection = "row-reverse";
            } else {
                theOne.style.flexDirection = "row";
            };
        };

        allDisplayed = [];
        // if()
    });
};

// -delay Anchor Scroll
function delayLink (URL) {
    setTimeout( function() { window.location = URL }, 1000 );
};

//// PRINT resume section -end