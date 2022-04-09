const scrollUpBtn = document.querySelector('.scroll-up');
const burgerIcon = document.querySelector('.burger');
const burgerList = document.querySelector('.burger-list');
const burgerListTabs = document.querySelectorAll('.burger-list a');
console.log(burgerListTabs);

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

//burger
burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('_active');
    burgerList.classList.toggle('_active');
    document.body.classList.toggle('_lock');
});

burgerListTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if(!burgerIcon.classList.contains('hide')) {
            burgerIcon.classList.toggle('_active');
            burgerList.classList.toggle('_active');
            document.body.classList.toggle('_lock');
        }
    })
})