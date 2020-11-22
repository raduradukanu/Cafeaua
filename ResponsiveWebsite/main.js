const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
        body.classList.toggle('open');

});





window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 4000,
    distance: '45rem',
    delay: 50
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 4000,
    distance: '45rem',
    delay: 50
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 5000,
    distance: '45rem',
    delay: 50
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 5000,
    distance: '45rem',
    delay: 50
});
