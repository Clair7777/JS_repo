"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 50;
let allServicePrices;
let servicePercentPrice;
let fullPrice;
let service1;
let service2;

let lowerScreen; // = screens.toLowerCase();
// let lowerScreens;
let arr; // = lowerScreens.split(", ");

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

console.log(!isNaN(parseFloat("10")) && isFinite("10"));

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

  // screenPrice = prompt("Сколько будет стоить данная работа?");

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;
  let servicePrice;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
    } else if (i === 1) {
      service2 = prompt(
        "Какой дополнительный тип услуги нужен?",
        "Отправка форм",
      );
    }

    do {
      servicePrice = prompt("Сколько это будет стоить?");
    } while (!isNumber(servicePrice));

    sum += +servicePrice;
  }
  return sum;
};

function getFullPrice() {
  return +screenPrice + allServicePrices;
}

function getTitle() {
  const trimmed = title.trimStart();
  return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
}

function getServicePercentPrices(price1, price2) {
  return Math.ceil(price1 - price1 * (price2 / 100));
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle();
lowerScreen = screens.toLowerCase();
arr = lowerScreen.split(", ");

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(arr);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
