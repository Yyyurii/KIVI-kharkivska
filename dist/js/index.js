const scrollUpBtn = document.querySelector('.scroll-up');
const burgerIcon = document.querySelector('.burger');

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

document.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollUpBtn.classList.remove('hide');
    } else if (window.pageYOffset < 500) {
        scrollUpBtn.classList.add('hide');
    }
})

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('_active');
    document.body.classList.toggle('_stop-scrolling');
});

// $('.header__bottom a').click(() => {
//   if ($burgerIcon.hasClass('_active')) {
//     $burgerIcon.toggleClass('_active');
//     $('body').toggleClass('_stop-scrolling');
//   }
// })