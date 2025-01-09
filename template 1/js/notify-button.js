let notifyAction = document.getElementById('notify');
let bgBlur = document.getElementById('blur');

function blurFade(){
    bgBlur.classList.add('blur-layer__fade');
};

notifyAction.addEventListener('click', blurFade);

// tests
console.log(bgBlur)
