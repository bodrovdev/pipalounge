//Красивое появление текста и заголовка в блоке subject
let subjectText = document.querySelectorAll('.about__subject-inner > p');
let subjectTitle = document.querySelectorAll('.about__subject-inner > h2');

let observerSubjectText = new IntersectionObserver(entries => {
  subjectText.forEach((element) => {
    element.classList.toggle( 'text-animated', entries[0].isIntersecting );
  })
});

let observerSubjectTitle = new IntersectionObserver(entries => {
  subjectTitle.forEach((element) => {
    element.classList.toggle( 'title-animated', entries[0].isIntersecting );
  })
});

subjectText.forEach((element) => {
  observerSubjectText.observe(element);
})

subjectTitle.forEach((element) => {
  observerSubjectTitle.observe(element);
})

//Красивое появление текста, заголовка и кнопок в блоке menu
let menuText = document.querySelectorAll('.about__menu-inner > p');
let menuTitle = document.querySelectorAll('.about__menu-inner > h2');
let menuButtons = document.querySelectorAll('.about__menu-inner > div');

let observerMenuText = new IntersectionObserver(entries => {
  menuText.forEach((element) => {
    element.classList.toggle( 'text-animated', entries[0].isIntersecting );
  })
});

let observerMenuTitle = new IntersectionObserver(entries => {
  menuTitle.forEach((element) => {
    element.classList.toggle( 'title-animated', entries[0].isIntersecting );
  })
});

let observerMenuButtons = new IntersectionObserver(entries => {
  menuButtons.forEach((element) => {
    element.classList.toggle( 'buttons-animated', entries[0].isIntersecting );
  })
}); 

menuText.forEach((element) => {
  observerMenuText.observe(element);
})

menuTitle.forEach((element) => {
  observerMenuTitle.observe(element);
})

menuButtons.forEach((element) => {
  observerMenuButtons.observe(element);
})

