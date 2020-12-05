const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.title');
const product = document.querySelector('.product img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.product-info h3');
const sizes = document.querySelector('product-info__meta');

container.addEventListener('mousemove', e => {
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

container.addEventListener('mouseenter', e => {
    card.style.transform = 'none';
    title.style.transform = `translateZ(25px)`;
    product.style.transform = `translateZ(50px) rotateZ(-11.25deg)`;
    sizes.style.transform = `translateZ(25px)`;
    purchase.style.transform = `translateZ(18.75px)`;
});

container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateZ(0deg)`;
    title.style.transform = 'translateZ(0px)';
    product.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
});