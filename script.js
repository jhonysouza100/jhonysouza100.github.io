// loading screen animation
const loader = document.querySelector(".loader");
window.onload = ()=> {
    setTimeout(function(){
        loader.style.opacity = "0";
        // loader.style.background = "red";
        setTimeout(function(){
            loader.style.display = "none";// desaparece el loader completamente
            
        }, 300);
    }, 1000);
}

// JQuery section start
$(document).ready(function () {

    // sticky navbar script
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show")
        } else {
            $('.scroll-up-btn').removeClass("show")
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // toggle menu-btn script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Frontend", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});