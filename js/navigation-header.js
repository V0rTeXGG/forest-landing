const HEADER = document.querySelector('.header');
const BODY = document.body;
const HEADER_BTN = document.querySelector('.header__btn--menu');
const NAV_LINKS = document.querySelectorAll('.nav__link');
const HEADER_NAV_MOBILE = document.querySelector('.header-mobile-nav');

export function initializationFunction() {

    NAV_LINKS.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({
                    top: offset,
                    behavior: "smooth"
                });
                if(HEADER_NAV_MOBILE.classList.contains('active')) {
                    HEADER_NAV_MOBILE.classList.remove('active')
                    BODY.classList.remove('scroll-lock')
                    HEADER_BTN.classList.remove('active')
                }
            }
        });
    });

    HEADER_BTN.addEventListener('click', () => {
        HEADER_BTN.classList.toggle('active')
        BODY.classList.toggle('scroll-lock')
        HEADER_NAV_MOBILE.classList.toggle('active')
    })
}