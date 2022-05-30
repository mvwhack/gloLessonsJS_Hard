'use strict';

// Переменная Lang принимает два значения "ru" или "en"
let lang = 'ru';

if (lang == 'ru') {
  console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang == 'en') {
  console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} else {
  console.log("Передано не верное значение");
}


switch (lang) {
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
  case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
    break;
  default:
    console.log("Передано не верное значение");
}

let arrLang = {
  'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(arrLang[lang]);

let namePerson = prompt('Ваше имя', 'Артем');
let message = (namePerson == "Артем") ? console.log("директор") :
  (namePerson == "Александр") ? console.log("преподаватель") :
  (namePerson == "Александр") ? console.log("преподаватель") : console.log("студент");