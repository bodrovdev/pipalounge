import IMask from 'imask';

let element = document.getElementById('modal_phone');
let maskOptions = {
  mask: '+{1} (000) 000-00-00',
};

let mask = IMask(element, maskOptions);