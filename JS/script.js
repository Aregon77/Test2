// Slider
$(document).ready(function () {
    $('.reviews__slider').slick({
        arrows: true,
        dots: true
    });
});


window.addEventListener("DOMContentLoaded", () => {
    // Табы menu__item
    const menuItem = document.querySelectorAll(".menu__item"),
        menuParent = document.querySelector(".menu__link"),
        menuContent = document.querySelectorAll(".menu__content");

    function hide() {
        menuContent.forEach(item => {
            item.style.display = "none";
        });

        menuItem.forEach(item => {
            item.classList.remove("menu__item-active");
        })
    }

    function show(i = 0) {
        menuContent[i].style.display = "flex";
        menuItem[i].classList.add("menu__item-active");
    }

    hide();
    show();

    menuParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains("menu__item")) {
            menuItem.forEach((item, i) => {
                if (target == item) {
                    hide();
                    show(i);
                }
            })
        }
    })

    // Burger меню
    const navBurger = document.querySelector(".nav__burger"),
        burgerModal = document.querySelector(".burger__modal"),
        modalClose = document.querySelector(".modal__close");

    navBurger.addEventListener("click", function () {
        burgerModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    })

    modalClose.addEventListener("click", () => {
        burgerModal.style.display = "none";
        document.body.style.overflow = "visible";
    })
})