"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 50;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let lowerScreens = screens.toLowerCase();
let arr = lowerScreens.split(", ");
let servicePercentPrice; // = Math.ceil(fullPrice - fullPrice * (rollback / 100));

let allServicePrices;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

const getAllServicePrices = function (price1, price2) {
  return price1 + price2;
};

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(price1, price2) {
  return price1 + price2;
}

fullPrice = getFullPrice(screenPrice, allServicePrices);

function getTitle(str) {
  const trimmed = str.trimStart();
  return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
}

function getServicePercentPrices(price1, price2) {
  return Math.ceil(price1 - price1 * (price2 / 100));
}
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(arr);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
