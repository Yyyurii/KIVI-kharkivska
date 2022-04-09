const scrollUpBtn = document.querySelector('.scroll-up');

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
