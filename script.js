/*==================== toggle icon nevbar =======================*/
let menuIcon = document.querySelector('#menu-icon');
let nevbar = document.querySelector('.nevbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nevbar.classList.toggle('active');
}














/*==================== Scroll secctions active link =======================*/

let sections = document.querySelectorAll('section');
let nevLinks = document.querySelectorAll('header nev a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            nevLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nev a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*====================Sticky nevbar =======================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and nevbar when click navbar link (Scroll) =======================*/
    menuIcon.classList.remove('bx-x');
    nevbar.classList.remove('active');

};


/*====================scroll reveal =======================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-contant, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contant h1, .about-img', { origin: 'top' });
ScrollReveal().reveal('.home-contant p, .about-content', { origin: 'right' });


/*==================== Typed js =======================*/

const typed = new Typed('#multiple-text', {
    strings: ['Full Stack Developer', 'Frontend Developer', 'Python Developer', 'Django Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});