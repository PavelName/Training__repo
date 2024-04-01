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
console.log(fullPrice);
let servicePercentPrice = 