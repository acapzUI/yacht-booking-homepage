'use strict'

/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // Badge 요소 숨기기!
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    // 상단으로 스크롤 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    })

  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    // 상단으로 스크롤 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
})


/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.visual .fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})


/**
 * 슬라이드 요소 관리
 */
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})
new Swiper(".yacht-swiper", {
  autoplay: {
    delay: 5000
  },
  loop: true,
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});






/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})


/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()
