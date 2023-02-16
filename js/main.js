// MAIN HEADER
//SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  //   if (searchEl.classList.contains("active")) {
  searchInputEl.focus();
  return;
});
searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

searchInputEl.addEventListener("blur", function () {
  earchInputEl.focus();
});

//SWIPER
//SWIPER NOTICE
const swiperNotice = new Swiper(
  ".notice .notice-line .inner .inner__left .swiper",
  {
    direction: "vertical",
    loop: true,
    autoplay: true,
  }
);

const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal", //기본값
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  touchRatio: 0,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".promotion .swiper-pagination", // pagination을 할 엘리먼트 클래스 설정
    clickable: true, // 클릭 가능 여부 설정
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev", // 이전 버튼 클래스 설정
    nextEl: ".promotion .swiper-button-next", // 이후 버튼 클래스 설정
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

function controlAutoPlay() {
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start();
  } else {
    swiperPromotion.autoplay.stop();
  }
}

// Toggle Promotion
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");
promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
});

//애니메이션 파트
// 페이지가 로딩되면 바로 시작
window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

//애니메이션 스크롤 파트
//엘살바도르
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 444) {
    const elsarlvadorSection = document.querySelector(".elsalvador");
    elsarlvadorSection.classList.add("animate");
  }
  if (window.scrollY > 1050) {
    const ethiopiaSection = document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }
  if (window.scrollY > 1750) {
    const pickSection = document.querySelector(".pick");
    pickSection.classList.add("animate");
  }
  if (window.scrollY > 2450) {
    const magazineSection = document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }
  if (window.scrollY > 2900) {
    const storeSection = document.querySelector(".store");
    storeSection.classList.add("animate");
  }
});
// direction: "horizontal", // 기본 값
// slidesPerView: 3, // 한번에 보여줄 아이템 수
// spaceBetween: 10, // 아이템간 거리
// centeredSlides: true, // 슬라이드 센터 여부
// loop: true, // 루프 여브
// autoplay: {
// // 자동 재생, 변경 시간 설정
// delay: 1000,
// disableOnInteraction: false,
