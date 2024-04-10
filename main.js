"use strict"
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные' );

let screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
let rollback = 15;
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let fullPrice = (screenPrice + servicePrice1 + servicePrice2);
let servicePercentPrice = Math.ceil(fullPrice * (rollback / 100));


if (fullPrice  >= 30000) {
  alert("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  alert("Даем скидку в 5%");
} else if ( fullPrice < 15000 && fullPrice >= 0) {
  alert('Скидка не предусмотрена');
} else if (fullPrice < 0) {
  alert('Что то пошло не так');
};

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice}  рублей/ долларов/гривен/юани `)

console.log(screens.toLowerCase().split(','));
console.log(screens.length);
console.log(servicePercentPrice);
console.log(fullPrice * (rollback / 100));