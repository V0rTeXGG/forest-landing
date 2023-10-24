import {modalWindowHandler} from "./modal-window.js"
import {handlerTabs} from './tabs.js'
import {initializationFancybox} from './gallery.js'
import {initializationSwiper} from './swiper.js'
import {initializationFunction} from "./navigation-header.js";
import {handlerFormOrder} from "./form-order.js";

const TAB_BUTTONS = document.querySelectorAll(".advice__block-btn");
const TAB_CONTENT = document.querySelectorAll(".advice__block-content");


modalWindowHandler()
initializationFancybox()
initializationSwiper()
handlerTabs(TAB_BUTTONS, TAB_CONTENT)
initializationFunction()
handlerFormOrder()

export function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    localStorage.setItem('cookieAccept', true)
    document.cookie = name + "=" + value + expires + "; path=/";
}


