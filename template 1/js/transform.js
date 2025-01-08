// Window
let mainBreakpoint = window.matchMedia('(max-width: 500px)');

// Elements
const main = document.querySelector('.container-main');
const heading = document.querySelector('.heading');
const pHeading = document.querySelector('.progress-heading');
const pBarValues = document.querySelector('.progress-bar__values');
const socialsDiv = document.querySelectorAll('.socials-link');
const socialsIcons = document.querySelectorAll('.socials-icon');
const homeContainer = document.querySelector('.container-home')
const homeIcon = document.getElementById('home-link');

// Resizing functions
function resizeMain(){
        main.style.width = '90%';
};

function resizeFonts(){
        heading.style.fontSize = '15vw';

        pHeading.style.fontSize = '4.5vw';
        pHeading.style.letterSpacing = '1.7vw';
    
        pBarValues.style.fontSize = '3.2vw';
};

function resizeSocials(){
        for (var i = 0; i < socialsDiv.length; i++ ) {
            socialsDiv[i].style.width = "14vw";
            socialsDiv[i].style.height = "14vw";
            socialsDiv[i].style.borderRadius = "14vw"
        };
};

function resizeIcons(){
        for (var i = 0; i < socialsIcons.length; i++ ) {
            socialsIcons[i].style.width = "7vw";
            socialsIcons[i].style.height = "7vw";
        }; 1
};

function changeHomeIcon(){
    homeIcon.style.position = 'relative';
    homeContainer.style.right = '7vw';
    homeContainer.style.top = '20px';
    document.getElementById('home-link').innerHTML = '<img src="assets/images/home-icon2.png" id="home-icon" alt="HOME">'
};

function resizeAll(){
    if(mainBreakpoint.matches == true){
        resizeMain();
        resizeFonts();
        resizeSocials();
        resizeIcons();
        changeHomeIcon();
        console.log('test passed');
    }else{};
};

// Media match listener
mainBreakpoint.addEventListener('change', resizeAll);

resizeAll();

// tests
console.log(mainBreakpoint);
