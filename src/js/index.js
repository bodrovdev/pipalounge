import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

//Мобильное меню
let burger = document.getElementById('burger');
let mobileMenu = document.getElementById('mobile-menu');
let navLinks = document.querySelectorAll('.main-nav__menu-link');

burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  mobileMenu.classList.toggle('main-nav__mobile-menu--active');

  if (burger.classList.contains('main-nav__burger--active')) {
    disableBodyScroll(mobileMenu);
  }
  else {
    enableBodyScroll(mobileMenu);
  }
})

navLinks.forEach((element) => {
  element.addEventListener('click', () => {
    if (mobileMenu.classList.contains('main-nav__mobile-menu--active')) {
      mobileMenu.classList.remove('main-nav__mobile-menu--active');
      burger.classList.remove('main-nav__burger--active');
      enableBodyScroll(mobileMenu);
    }
  })
})

//Анимация для элементов навигации
let nav_links = document.querySelectorAll('.main-nav__menu-link');
let nav_logo = document.getElementById('nav_logo');

nav_links.forEach((element) => {
  element.classList.add('main-nav__menu-link--loaded');
});

nav_logo.classList.add('main-nav__logo-block--loaded');

//Анимация для элементов из блока heading
let heading_title = document.getElementById('heading_title');
let heading_button = document.getElementsByClassName('heading__info-button');

function animHeading() {
  if (heading_title === null || heading_button === null) {
    return;
  }
  else {  
    heading_title.classList.add('heading__info-title--loaded');
  
    for (let element of heading_button) {
      element.classList.add('heading__info-button--loaded');
    }
  }
}

animHeading();

//Анимация для текста и заголовков в блоках описания
let desc_text = document.querySelectorAll('.about__desc > div');
let desc_title = document.querySelectorAll('.about__desc > h2');
let desc_buttons = document.querySelectorAll('.about__menu-link');

function animAbout() {
  if (desc_text === null || desc_title === null || desc_buttons === null) {
    return;
  }
  else {
    desc_text.forEach((element) => {
      element.setAttribute('data-aos', 'fade-left');
      element.setAttribute('data-aos-duration', '1000');
      element.setAttribute('data-aos-delay', '4');
    })
    
    desc_title.forEach((element) => {
      element.setAttribute('data-aos', 'fade-right');
      element.setAttribute('data-aos-duration', '1000');
      element.setAttribute('data-aos-delay', '4');
    })
    
    desc_buttons.forEach((element) => {
      element.setAttribute('data-aos', 'fade-up');
      element.setAttribute('data-aos-duration', '1000');
      element.setAttribute('data-aos-delay', '4');
    })
  }
}

animAbout();

//Анимация в блоке contacts
let contacts_desc = document.getElementById('contacts_info');

function animContacts() {
  if (contacts_desc === null) {
    return;
  }
  else {
    contacts_desc.setAttribute('data-aos', 'fade-right');
    contacts_desc.setAttribute('data-aos-duration', '1000');
    contacts_desc.setAttribute('data-aos-delay', '4');
  }
}

animContacts();

//Анимация для элементов футера
let footer_links = document.querySelectorAll('.footer-main__nav-item');
let footer_logo = document.getElementById('footer_logo');
footer_links.forEach((element) => {
  element.setAttribute('data-aos', 'fade-up');
  element.setAttribute('data-aos-duration', '1000');
  element.setAttribute('data-aos-delay', '4');
})
footer_logo.setAttribute('data-aos', 'fade-right');
footer_logo.setAttribute('data-aos-duration', '1000');
footer_logo.setAttribute('data-aos-delay', '4');

//Открытие и закрытие модального окна
let modal = document.getElementById('modal');
let openModal = document.querySelectorAll('#open-modal');
let closeModal = document.getElementById('close-modal');

openModal.forEach((element) => {
  element.addEventListener('click', () => {
    modal.classList.add('modal--opened');
    disableBodyScroll(modal);
  })
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('modal--opened');
  enableBodyScroll(modal);
})

modal.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) {
    return;
  }
  else {
    modal.classList.remove('modal--opened');
    enableBodyScroll(modal);
  }
})

//Смена текста в модальном окне при отправке формы
let modalForm = document.getElementById('modalForm');
let modalMain = document.getElementById('modalMain');
let modalSuccess = document.getElementById('modalSuccess');

modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  modalMain.classList.add('modal__inner--close');
  modalSuccess.classList.add('modal__success--open');
})

//Переход на другую страницу при отсутствии подходящих элементов на текущей
function findElement() {
  let anchorLinks = Array.from(document.querySelectorAll("a[href*='#']"))
                    .filter(item => item.href.split('#')[1] !=='');

  for (let item of anchorLinks) {
    if (document.querySelectorAll(`a[href="${item.href.split('#')[1]}"]`) === null) {
      item.setAttribute('href', `https://pipalounge.com/#${item.href.split('#')[1]}`);
    }
  }
}

findElement();

// let aboutBlock = document.getElementById('subject');
// if (aboutBlock === null) {
//   document.querySelectorAll("a[href='#subject']").forEach((element) => {
//     element.setAttribute('href', 'https://pipalounge.com/#subject');
//   })
// }

// let menuBlock = document.getElementById('menu');
// if (menuBlock === null) {
//   document.querySelectorAll("a[href='#menu']").forEach((element) => {
//     element.setAttribute('href', 'https://pipalounge.com/#menu');
//   })
// }

// let galleryBlock = document.getElementById('slider');
// if (galleryBlock === null) {
//   document.querySelectorAll("a[href='#slider']").forEach((element) => {
//     element.setAttribute('href', 'https://pipalounge.com/#slider');
//   })
// }

// let contactsBlock = document.getElementById('contacts_info');
// if (contactsBlock === null) {
//   document.querySelectorAll("a[href='#contacts_info']").forEach((element) => {
//     element.setAttribute('href', 'https://pipalounge.com/#contacts_info');
//   })
// }

//Плавный скроллинг до якорных ссылок
$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  
  var id = $(this).attr('href'),
      top = $(id).offset().top;

  $('body,html').animate({
    scrollTop: top
  }, 2000);
});