"use strict"
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные' );

let screenPrice = +prompt('Сколько будет стоить данная работа?', 12000);
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let fullPrice = (screenPrice + servicePrice1 + servicePrice2);
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * 0.5));

if (fullPrice  >= 30000) {
  alert("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  alert("Даем скидку в 5%");
} else if ( fullPrice < 15000 && fullPrice >= 0) {
  alert('Скидка не предусмотрена');
} else if (fullPrice < 0) {
  alert('Что то пошло не так');
};


console.log(fullPrice);
console.log(servicePercentPrice);