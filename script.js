var thumbs = new Swiper(".thumbs", {
    centeredSlidesBounds: true,
    slidesPerView: 2,
    direction: 'horizontal',
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    spaceBetween: 20,
    speed: 1200,
});
var slider = new Swiper(".main-slider", {
    spaceBetween: 1000,
    initialSlide: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: "coverflow",
    speed: 2000,
    thumbs: {
        swiper: thumbs,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
});

gsap.from(".intro .spider img", {
    scale: 0,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
})
gsap.from(".intro .hand", {
    y: 1000,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
})
gsap.from(".intro h2", {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 1,
})
gsap.from(".thumbs .swiper-slide", {
    x: 1000,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay: 1,
})