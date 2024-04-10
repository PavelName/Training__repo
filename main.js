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

let fullPrice;
let allServicePrices;

let servicePercentPrice;

const chowTypeOf = function (varible){
  console.log(varible, typeof varible)
};
const getAllServicePrices = function() {
  return screenPrice + servicePrice1 + servicePrice2;
};
const getTitle = function() {
  return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase;
};

const getServicePercentPrices = function() {
  return Math.ceil(fullPrice * (rollback / 100));
}
function getFullPrice () {
  return screenPrice + allServicePrices;
}
const getRoiibackMessage = function (price){
  if (price  >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if ( price < 15000 && price >= 0) {
    return 'Скидка не предусмотрена';
  } else if (price < 0) {
    return 'Что то пошло не так';
  };
}

chowTypeOf(title);
chowTypeOf(fullPrice);
chowTypeOf(adaptive);

getTitle();

 allServicePrices = getAllServicePrices();
 fullPrice = getFullPrice();
 servicePercentPrice = getServicePercentPrices();

console.log(getRoiibackMessage(fullPrice));
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice}  рублей/ долларов/гривен/юани `);

console.log(screens.toLowerCase().split(','));
console.log(screens.length);
console.log(servicePercentPrice);

