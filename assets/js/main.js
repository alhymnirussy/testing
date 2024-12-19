// <!--=============== SNOW EFFECT JS ===============-->

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
  snowflake.style.opacity = Math.random() * 0.5 + 0.5;
  snowflake.style.width = snowflake.style.height = Math.random() * 5 + 5 + "px";
  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

setInterval(createSnowflake, 300);

/*=============== SWIPER JS GALLERY ===============*/
let swiperCards = new Swiper(".gallery-cards", {
  loop: true,
  loopedSlides: 6,
  cssMode: true,
  effect: "fade",
});

let swiperThumbs = new Swiper(".gallery-thumbs", {
  loop: true,
  loopedSlides: 6,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiperThumbs.controller.control = swiperCards;

// Function to automatically click the "next" button every 3 seconds
setInterval(() => {
  document.querySelector(".swiper-button-next").click();
}, 4000);


