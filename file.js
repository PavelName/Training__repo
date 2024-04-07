let num = 266219;
let result = ('' + num).split('');
console.log(result);
let count = 1;
for (let i of result) {
  count *= parseInt(i);
}

let countSecond = count * count * count;
let firstTwoNumber = Number(String(count).slice(0, 2));
console.log(firstTwoNumber);
console.log(countSecond);
console.log(count);

let lang = 'en';

let daysOfWeek = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
let results = daysOfWeek[lang].join('! ');

console.log(results);

let lan = 'ru';
let ruWeeks = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
let enWeeks = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';
 
if ( lan === 'ru') {
  console.log(ruWeeks)
} else if (lan === 'en') {
  console.log(enWeeks);
};

let lng = 'ru';
switch (lng) {
  case 'ru':
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье.');
  break;
  case 'en':
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
  break;
  default:
    console.log('Invalid langusges!');
};