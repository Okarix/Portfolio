"use strict";

document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        overlay = document.querySelector('.menu__overlay'),
        link = document.querySelectorAll('.menu__link'),
        up = document.querySelector('.pageup');
    // form = document.querySelector('#form');


    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    link.forEach(i => {
        i.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });

    const btnVisibility = () => {
        if (window.scrollY > 400) {
            up.style.visibility = "visible";
        } else {
            up.style.visibility = "hidden";
        }
    };

    document.addEventListener("scroll", () => {
        btnVisibility();
    });

    //!
    const sendButton = document.querySelector('.send-button');

    const sendMail = async () => {
        let response = await fetch('/send'),
            result = await response.json();
    }

    sendButton.onclick = (e) => {
        e.preventDefault();
        sendMail();

    }
    //!

    // form.addEventListener('submit', formSend);

    // async function formSend(e) {
    //     e.preventDefault();

    //     let formData = new FormData(form);

    //     let response = await fetch('sendmail.php', {
    //         method: 'POST',
    //         body: formData
    //     });
    //     if (response.ok) {
    //         let result = await response.json();
    //         alert(result.message);
    //         form.reset();
    //     } else {
    //         alert("Error");
    //     }
    // }
});