import {setCookie} from "./main.js";
import {clearForm} from "./form-order.js";


export function modalWindowHandler() {
    const BODY = document.body
    const HEADER = document.querySelector('.header')
    const MODAL_OVERLAY = document.querySelector('.modal-overlay')

    const MODAL_ORDER = document.getElementById('modal-order')
    const BTN_ORDER = document.querySelectorAll('.button--order')
    const ORDER_FORM = MODAL_ORDER.querySelector('.form');
    const ORDER_SUCCESSFUL = MODAL_ORDER.querySelector('.form__successful')

    const MODAL_POLICY = document.getElementById('modal-policy')
    const BTNS_POLICY = document.querySelectorAll('.btn--policy')


    const MODAL_COOKIE = document.querySelector('.modal-cookie')
    const BTN_COOKIE = document.querySelector('.button[data-btn-cookie]')
    const MODAL_CLOSE_BTNS = document.querySelectorAll('.modal-window__close-btn')

    setTimeout(function () {
        const accept = localStorage.getItem('cookieAccept')
        if (!accept) {
            MODAL_COOKIE.classList.add('active')
        }
    }, 2000)

    function activeModalOrder() {
        MODAL_ORDER.classList.add('active');
        MODAL_OVERLAY.classList.add('active');
        BODY.classList.add('lock-modal');
        HEADER.classList.add('scroll-lock');
    }

    function activeModalPolicy() {
        MODAL_POLICY.classList.add('active');
        console.log('1212')
        if (!MODAL_OVERLAY.classList.contains('active')) {
            MODAL_OVERLAY.classList.add('active');
            BODY.classList.add('lock-modal');
            HEADER.classList.add('scroll-lock');
        }
    }



    function closingModal() {
        if(MODAL_ORDER.classList.contains('active') && MODAL_POLICY.classList.contains('active')) {
            MODAL_POLICY.classList.remove('active');
        } else {
            MODAL_OVERLAY.classList.remove('active');
            BODY.classList.remove('lock-modal');
            HEADER.classList.remove('scroll-lock');
            if(MODAL_ORDER.classList.contains('active')) {
                MODAL_ORDER.classList.remove('active');
                setTimeout(() => clearForm(ORDER_FORM), 300)

                if(ORDER_FORM.classList.contains('hidden'))
                    setTimeout(function() {
                        ORDER_FORM.classList.remove('hidden')
                        ORDER_SUCCESSFUL.classList.remove('active')
                    }, 300)

            }
            if(MODAL_POLICY.classList.contains('active')) {
                MODAL_POLICY.classList.remove('active');
            }
        }
    }

    function closeModalOnOverlayClick(event) {
        closingModal();
    }

    MODAL_OVERLAY.addEventListener('click', closeModalOnOverlayClick);

    BTN_ORDER.forEach(button => {
        button.addEventListener('click', activeModalOrder)
    })

    BTNS_POLICY.forEach(button => {
        button.addEventListener('click', activeModalPolicy)
    })

    MODAL_CLOSE_BTNS.forEach(button => {
        button.addEventListener('click', () => {
            const btnData = button.getAttribute('data-modal')
            closingModal()
        })
    })

    BTN_COOKIE.addEventListener('click', function () {
        setCookie("cookieAccepted", "true", 365);
        MODAL_COOKIE.classList.remove('active')
    })
}