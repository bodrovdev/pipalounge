import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

//Анимация для текста и заголовков в блоках описания
let desc_text = document.querySelectorAll('.about__desc > p');
let desc_title = document.querySelectorAll('.about__desc > h2');
let desc_buttons = document.querySelectorAll('.about__desc > div');

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

//Анимация в блоке contacts
let contacts_desc = document.getElementById('contacts_info');
contacts_desc.setAttribute('data-aos', 'fade-right');
contacts_desc.setAttribute('data-aos-duration', '1000');
contacts_desc.setAttribute('data-aos-delay', '4');

//Смена положения блока с информацией в блоке contacts
let contacts_desc_move = document.getElementById('contacts_info_move');
contacts_desc_move.addEventListener('click', () => {
  contacts_desc_move.classList.toggle('contacts__info-move--right');
  contacts_desc.classList.toggle('contacts__info--right');
})


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