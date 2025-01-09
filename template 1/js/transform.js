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
const notifyButton = document.querySelector('.notify-btn');

// Resizing functions
function resizeMain(){
    if(mainBreakpoint.matches == true){
        main.style.width = '90%';
    }else if(mainBreakpoint.matches == false){

    }else{}
};

function resizeFonts(){
    if(mainBreakpoint.matches == true){
        heading.style.fontSize = '15vw';

        pHeading.style.fontSize = '4.5vw';
        pHeading.style.letterSpacing = '1.7vw';
    
        pBarValues.style.fontSize = '3.2vw';
    }else if(mainBreakpoint.matches == false){
        heading.style.fontSize = '7vw';

        pHeading.style.fontSize = '1.7vw';
        pHeading.style.letterSpacing = '0.7vw';
    
        pBarValues.style.fontSize = '1.2vw';
    }else{}
};

function resizeSocials(){
    if(mainBreakpoint.matches == true){
        for (var i = 0; i < socialsDiv.length; i++ ) {
            socialsDiv[i].style.width = "14vw";
            socialsDiv[i].style.height = "14vw";
            socialsDiv[i].style.borderRadius = "14vw"
        };
    }else if(mainBreakpoint.matches == false){
        for (var i = 0; i < socialsDiv.length; i++ ) {
            socialsDiv[i].style.width = "6vw";
            socialsDiv[i].style.height = "6vw";
            socialsDiv[i].style.borderRadius = "6vw"
        };
    }else{}

};

function resizeIcons(){
    if(mainBreakpoint.matches == true){
        for (var i = 0; i < socialsIcons.length; i++ ) {
            socialsIcons[i].style.width = "7vw";
            socialsIcons[i].style.height = "7vw";
        };
    }else if(mainBreakpoint.matches == false){
        for (var i = 0; i < socialsIcons.length; i++ ) {
            socialsIcons[i].style.width = "3vw";
            socialsIcons[i].style.height = "3vw";
        };
    }else{}
};

function changeHomeIcon(){
    if(mainBreakpoint.matches == true){
        homeIcon.style.position = 'relative';
        homeContainer.style.right = '7vw';
        homeContainer.style.top = '20px';
        document.getElementById('home-link').innerHTML = '<img src="assets/images/home-icon2.png" id="home-icon" alt="HOME">'
    }else if(mainBreakpoint.matches == false){
        homeContainer.style.position = 'fixed';
        homeContainer.style.top = '30px';
        homeContainer.style.right = '12vw';
        document.getElementById('home-link').innerHTML = '<span>HOME</span>'
    }else{};
};

function resizeNotify(){
    if(mainBreakpoint.matches == true){
        notifyButton.style.width = '30vw';
        notifyButton.style.height = '9vw';
        notifyButton.style.fontSize = '3.7vw';
    }else if(mainBreakpoint.matches == false){
        notifyButton.style.width = '14vw';
        notifyButton.style.height = '4vw';
        notifyButton.style.fontSize = '1.7vw';
    }else{}
};

function resizeAll(){
        resizeMain();
        resizeFonts();
        resizeSocials();
        resizeIcons();
        changeHomeIcon();
        resizeNotify();
};

// Media match listener
mainBreakpoint.addEventListener('change', resizeAll);

resizeAll();