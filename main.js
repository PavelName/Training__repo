"use strict"
let title;
let screens;
let screenPrice;
let adaptive;

// let servicePrice1;
// let servicePrice2;

let rollback = 15;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;


const isNumber = function (num) {

 return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt('Как называется ваш проект?');
  screens = prompt('Какие типы экранов нужно разработать?','Простые, Сложные, Интерактивные' );


  while (!isNumber(screenPrice)) {
    screenPrice = prompt('Сколько будет стоить данная работа?');
  }

  screenPrice = prompt('Сколько будет стоить данная работа?');
  adaptive = confirm('Нужен ли адаптив на сайте?');
}
const getAllServicePrices = function() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (sum === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (sum === 1) {
      service2  = prompt('Какой дополнительный тип услуги нужен?');
    }
     sum += +prompt('Сколько это будет стоить?');
    
  }
  return sum;
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


  asking();
  allServicePrices = getAllServicePrices();
  fullPrice = getFullPrice();
  servicePercentPrice = getServicePercentPrices();
  title = getTitle();


console.log(getRoiibackMessage(fullPrice));
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`);
console.log(`Стоимость разработки сайта ${fullPrice}  рублей/ долларов/гривен/юани `);

console.log(screens.toLowerCase().split(','));
console.log(screens.length);
console.log(servicePercentPrice);

