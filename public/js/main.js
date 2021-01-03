let allHexa = document.getElementsByClassName('hexa');
let allHexaH = document.getElementsByClassName('hexaH');
let allHexaB = document.getElementsByClassName('hexaB');

let allResumeItems = document.querySelectorAll('.resume-item');

// function even/uneven:
let uneven = (n) => {
    let uneven;
    if (n%2 === 1) {
        uneven = true;
    };
    return uneven;
};



//// Beehive Droping effect - start
let BeehiveSvg = document.querySelector('#Beehive');
let BeehiveBack = document.querySelector('#BeehiveBack');

for (let i = 0; i < allHexaH.length; i++) {
   // for falling down effect, opacity to zero to begin
   allHexa[i].style.opacity = "0";
   allHexaB[i].style.opacity = "0";   
};

// on landing page
document.addEventListener('DOMContentLoaded',function(){
    // 1st TimeOut for delay on landing page
    setTimeout(() => {
        BeehiveSvg.style.opacity = 1;
        BeehiveBack.style.opacity = 1;

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

// rotate Function:
let rotateFunction = (i) => {
    allHexaB[i].style.transition = "transform 0.9s";
    allHexaB[i].style.transformOrigin = 'center';
    allHexaB[i].style.transformBox = 'fill-box';
    
    allHexa[i].style.transition = 'transform 0.9s, opacity 0.8s';
    allHexa[i].style.transformOrigin = 'center';
    allHexa[i].style.transformBox = 'fill-box';
};
// rotate on hexa click
for (let i = 0; i < allHexa.length; i++) {
    allHexaH[i].addEventListener('click',function(){

    rotateFunction(i);

    allHexa[i].classList.toggle('transitionHexa');
    allHexaB[i].classList.toggle('transitionHexaB');
    });
};

//// BEEHIVE rotate on click - end


//// PRINT resume section -start

// -display none VS block

// display function 
let displayFunction = (i) => {
    // allResumeItems[i].classList.toggle('visible');
        
        // check if visible, if yes, put it in an array?
        let allDisplayed = [];
        for (let i = 0; i < allResumeItems.length; i++) {
          let name = allResumeItems[i].getAttribute('class');
          if (name.includes('visible')) {
              allDisplayed.push(allResumeItems[i]);
          }; 
        };

        // check which one in allDisplayed is uneven
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
};

// display resume-items on hexa Click
for (let i = 0; i < allHexaH.length; i++) {
    let link = allHexaH[i].parentElement;
    link.addEventListener('click',function(){

        allResumeItems[i].classList.toggle('visible');

        displayFunction(i);  
    });
};

// -delay Anchor Scroll
function delayLink (URL) {
    setTimeout( function() { window.location = URL }, 1000 );
};

// GO BACK UP
let backUpClicker = document.querySelector('#backUp');

backUpClicker.addEventListener('click',function(){
    window.location = "#name";
});

//--- Back up disappears on scroll up to the Beehive Page
window.addEventListener('scroll', function(e) {
    // 10 is a threshold, probably in pixels
    //NB : scrollY replaces scrollTop
   if (window.scrollY < 100){
       backUpClicker.classList.remove('opacityOne');
    } else {
       backUpClicker.classList.add('opacityOne');
   };
});

// close resume item btn
let allCloseBtns = document.querySelectorAll('.close-resume-item');

for (let i = 0; i < allCloseBtns.length; i++) {
    allCloseBtns[i].addEventListener('click',function(){
        // remove resume-item (maybe a nice opacity 1 to 0 with a set time out for display none (so displayFunction))
        allResumeItems[i].classList.remove('visible');
        displayFunction(i); 
        // rotate back the hexa
        allHexa[i].classList.remove('transitionHexa');
        allHexaB[i].classList.remove('transitionHexaB');
        rotateFunction(i);
    });  
};




//// PRINT resume section -end


// // TOGGLE Side Menu - start
let toggleIcon = document.querySelector("#toggle");
let dropdownMenu = document.querySelector('#dropdownMenu');
let dropdownList = document.querySelector('#dropdownList');
let dropdownListItems = dropdownList.querySelectorAll('a');

toggleIcon.addEventListener('click',function(){
    let toggle = dropdownList.classList.toggle('open');
    if (toggle) {
        // rotate the toggleIcon
        toggleIcon.style.transition = "transform 0.4s";
        toggleIcon.style.transform = "rotate(90deg)";
        toggleIcon.style.transformOrigin = "center";
        toggleIcon.style.transformBox = "fill-box";
        // each icon appears
        for(let i=0; i < dropdownListItems.length; i++){ 
            (function(i) {
               setTimeout(function(){
                dropdownListItems[i].transition = "opacity 0.2s"
                dropdownListItems[i].style.opacity = "1";
                }, i * 300);
            })(i);
        };
        // background opacity
        dropdownMenu.style.transition = "background-color 1s"
        dropdownMenu.style.backgroundColor = "#80665957";
    } else {
        // delay the closure
        dropdownList.classList.add("open");
        setTimeout(() => {
            dropdownList.classList.remove("open");
        }, 600);
        // background opacity
        dropdownMenu.style.transition = "background-color 0.8s"
        dropdownMenu.style.backgroundColor = "transparent";
        // rotate the toggleIcon
        toggleIcon.style.transition = "transform 0.4s";
        toggleIcon.style.transform = "unset";
        toggleIcon.style.transformOrigin = "center";
        toggleIcon.style.transformBox = "fill-box";
        // each icon disappear
        for(let i= dropdownListItems.length -1; i >= 0; i--){ 
            (function(i) {
               setTimeout(function(){
                dropdownListItems[(dropdownListItems.length -1) - i].transition = "opacity 0.2s"
                dropdownListItems[(dropdownListItems.length -1) - i].style.opacity = "0";
                }, i * 200);
            })(i);
        };
    };
});

// ListDisplay

let listDisplay = document.querySelector('#listDisplay');
let beehiveIcon = document.querySelector('#beehiveIcon');
let listIcon = document.querySelector('#listIcon')

//--- display or hide resume-items all at once on listDisplay click
listDisplay.addEventListener('click',function(e){

    let toggle = listDisplay.classList.toggle('on');

    if (toggle) {
        // display resume items
        for (let i = 0; i < allResumeItems.length; i++) {
            let className = allResumeItems[i].getAttribute('class');
            let checkVisibility = className.includes('visible');
            // CHECK IF "visible" class already, if not, add it
            if (checkVisibility) {
                displayFunction(i);
            } else {
                allResumeItems[i].classList.add('visible');
                displayFunction(i); 
            };
        };

        // scroll
        window.location = "#introduction";

        // rotate beehives
        for (let i = 0; i < allHexaH.length; i++) {
            allHexa[i].classList.remove('transitionHexa');
            allHexaB[i].classList.remove('transitionHexaB');
            rotateFunction(i);
            (function(i) {
                setTimeout(function(){
                    allHexa[i].classList.add('transitionHexa');
                    allHexaB[i].classList.add('transitionHexaB');
                 }, i * 100);
             })(i);
        };
        // change icon
        listIcon.style.opacity = "0";
        beehiveIcon.style.opacity = "1";

    } else {
        // back up
        window.location = "#name";
        // hide resume items
        for (let i = 0; i < allResumeItems.length; i++) {
            setTimeout(function(){
                allResumeItems[i].classList.remove('visible');
                }, 1000 );
        }; 
        // rotate hexas back to pattern 
        for (let i = 0; i < allHexaH.length; i++) {
            (function(i) {
                setTimeout(function(){
                    allHexa[i].classList.remove('transitionHexa');
                    allHexaB[i].classList.remove('transitionHexaB');
                 }, i * 100);
             })(i);
            rotateFunction(i);
        };
        // change icon back
        listIcon.style.opacity = "1";
        beehiveIcon.style.opacity = "0";
    };

    
});

// // TOGGLE Side Menu - end


