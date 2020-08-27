const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navlinks = document.querySelectorAll('.nav-link li');
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
        navlinks.forEach((link, index)=> {
            if(link.style.animation) {
                link.style.animation = '';
            }else {
                link.style.animation = `navlinkfade 0.5s ease forwards ${index /7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}
navslide();

const btn = document.querySelector('.button');
btn.addEventListener('click', ()=> {
    alert('contact to request');
})
