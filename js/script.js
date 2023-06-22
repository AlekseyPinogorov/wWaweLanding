// переключение плей/пауза в хэдере
let btn = document.querySelectorAll(".header__btn-play")

btn.forEach(function(i) {
  i.addEventListener("click", function () {
    this.classList.toggle("header__btn-pause--active");
  });
})

// переключение плей/пауза в подкастах
let btnPodcast = document.querySelectorAll(".podcast__btn-play")

btnPodcast.forEach(function(i) {
  i.addEventListener("click", function () {
    this.classList.toggle("podcast__btn-pause--active");
  });
})

// показать еще в подкастах
const btnMore = document.querySelector('.podcast__btn');
const podcastItem = document.querySelectorAll('.podcast__item');

btnMore.addEventListener('click', () => {
    podcastItem.forEach(el => { el.classList.add('podcast__item--visible') });
    btnMore.closest('.podcast__btn').classList.add('podcast__btn--hidden');
});

// подключение селекта
const element = document.querySelector('.select');
const choices = new Choices(element, {
	searchEnabled: false,
	itemSelectText: '',
	shouldSort: false,
	position: 'bottom',
  labelId: true,
});

// аккордион
document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion__list', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  showMultiple: false,
  openOnInit: [0],
    collapse: false
});
})

// табы
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
        e.currentTarget.classList.add('tabs-nav__btn--active');

        tabsItem.forEach(function(element){ element.classList.remove('tabs__item--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
    });
});


let tabsBtnPlay = document.querySelectorAll('.play-tabs-nav__btn');
let tabsItemPlay = document.querySelectorAll('.play-tabs-item');

tabsBtnPlay.forEach(function(element){
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;

        tabsBtnPlay.forEach(function(btn){ btn.classList.remove('play-tabs-nav__btn--active')});
        e.currentTarget.classList.add('play-tabs-nav__btn--active');

        tabsItemPlay.forEach(function(element){ element.classList.remove('play-tabs-item--active')});
        document.querySelector(`[data-target="${path}"]`).classList.add('play-tabs-item--active');
    });
});


// свайпер
let swiper = new Swiper('.swiper', {
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12
    },

    575: {
      slidesPerView: 2,
      spaceBetween: 28
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 28
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    1300: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// форма
document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form', {
    errorLabelStyle: {
      color: '#D52B1E',
    },
  });

  validation
      .addField('.textarea', [{
        rule: 'minLength',
        value: 20,
        errorMessage: "Напишите что-нибудь еще"
      },
    ])

    .addField('.name', [{
        rule: 'minLength',
        value: 3,
        errorMessage: "Не достаточное количество символов"
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: "Вы ввели больше чем положено"
      }
    ])
    .addField('.mail', [{
        rule: 'required',
        errorMessage: 'Поле нужно заполнить',
      },
      {
        rule: 'email',
        errorMessage: 'Вы не корректно ввели email',
      }
    ])
    .addField('.checkbox', [
      {
        rule: 'required',
      },
    ])
})

// поиск
let search = document.querySelector('.search-btn');
let searchMenu = document.querySelector('.search');
let searchClose = document.querySelectorAll('.search-btn--closed');

search.addEventListener('click', function() {
    searchMenu.classList.toggle('search--active');
})

searchClose.forEach(function (el) {
  el.addEventListener('click', function () {

    searchMenu.classList.remove('search--active');
  })
})

// бургер
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav-up');
let menuBott = document.querySelector('.header__nav-bott');
let menuLinks = menu.querySelectorAll('.header__link-up');
let menuLinksBott = menuBott.querySelectorAll('.header__link-bott');

burger.addEventListener('click', function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    menuBott.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    menuBott.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

menuLinksBott.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    menuBott.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

// что в эфире
let contBott = document.querySelector('.header__content-bott');
let live = document.querySelector('.header__btn-320');
let liveOpen = document.querySelectorAll('.live');

live.addEventListener('click', function() {
  live.classList.toggle('header__btn-320--active');

  liveOpen.forEach(function (el) {
    el.classList.toggle('live--active');
    })
  })

live.addEventListener('click', function() {
  contBott.classList.toggle('effect--active');
})

// плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
