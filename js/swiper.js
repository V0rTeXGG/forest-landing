export function initializationSwiper() {
    let swiper = new Swiper(".slider-recipes", {
        slidesPerView: 3,
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        touch: true,
        breakpoints: {
            980: {
                slidesPerView: 3,
                mousewheel: true
            },
            590: {
                slidesPerView: 2,
                mousewheel: true
            },
            0: {
                slidesPerView: 1,
                mousewheel: true
            }
        },
    });

    {
        let swiper = new Swiper(".process-slider", {
            slidesPerView: 2,
            spaceBetween: 16,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            touch: true,
            breakpoints: {
                590: {
                    slidesPerView: 2,
                    mousewheel: true
                },
                0: {
                    slidesPerView: 1,
                    mousewheel: true
                }
            },
        });
    }
}