$(document).ready(function () {

    let screenHigh = $(window).height();
    console.log(screenHigh);

    $(window).scroll(function(){
        let currentPosition = $(this).scrollTop();
        console.log(currentPosition);
        if(currentPosition >= screenHigh-200){
            $(".header").addClass("header-scroll");
            $(".nabar").addClass("nabar-scroll");
            $(".nav-link").addClass("nav-link-scroll");
            
            $(".site-logo").addClass("site-logo-scroll");
            $(".site-logo1").addClass("site-logo1-scroll");
        }else{
            $(".header").removeClass("header-scroll");
            $(".navbar").removeClass("navbar-scroll");
            $(".nav-link").removeClass("nav-link-scroll");
            $(".nav-link").removeClass("current-section");
            setActive("home");
            $(".site-logo").removeClass("site-logo-scroll");
            $(".site-logo1").removeClass("site-logo1-scroll");

        }
    });
});

function setActive(current) {

    $(".nav-link").removeClass("current-section");

    $(`.nav-link[href='#${current}']`).addClass('current-section');

}

function navScroll() {

    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {

        if(direction == "down"){

            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }

    },{ offset:'150px' });

    currentSection.waypoint(function (direction) {

        if(direction == "up"){
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
        }

    },{ offset:'150px' });

}

navScroll();

$(window).on("load",function () {
    $('.loader-container').fadeOut(500,function () {
        $(this).remove();
    });
});