gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut,
});
tl.from(
    '.stagger1',
    {
        opacity: 0,
        y: -50,
        stagger: 0.3,
        ease: Power4.easeOut,
        duration: 2.5,
    },
    '-=1.5'
);
tl.from(
    '.hero-design',
    {
        opacity: 0,
        y: 50,
        ease: Power4.easeOut,
        duration: 1,
    },
    '-=2'
);

gsap.from('.square-anim', {
    stagger: 0.4,
    scale: 0.4,
    duration: 1.7,
    ease: Back.easeOut.config(1.7),
});

gsap.from('.transition2', {
    scrollTrigger: {
        trigger: '.transition2',
        start: 'top bottom',
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
});

gsap.from('.transition3', {
    scrollTrigger: {
        trigger: '.transition3',
        start: 'top center',
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.6,
});



//////////////////////////////////////
//SMOOTH SCROLLING

const menuLinks2 = document.querySelectorAll('.menuLink2');

const smoothScroll = function(e){
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('menuLink2')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
};

menuLinks2.forEach(addEventListener('click', smoothScroll));