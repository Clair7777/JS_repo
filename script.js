"use strict";
// let lowerScreen;
// let lowerScreens;
// let arr;

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 50,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные",
    );

    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа?", 200);
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  getRollbackMessage: function (price) {
    if (price > 30000) {
      return "Даем скидку в 10%";
    } else if (price >= 15000 && price <= 30000) {
      return "Даем скидку в 5%";
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },

  getAllServicePrices: function () {
    let sum = 0;
    let servicePrice;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt(
          "Какой дополнительный тип услуги нужен?",
          "Метрика",
        );
      } else if (i === 1) {
        appData.service2 = prompt(
          "Какой дополнительный тип услуги нужен?",
          "Отправка форм",
        );
      }

      do {
        servicePrice = prompt("Сколько это будет стоить?", 100);
      } while (!appData.isNumber(servicePrice));

      sum += +servicePrice;
    }
    return sum;
  },

  getServicePercentPrices: function getServicePercentPrices(price1, price2) {
    return Math.ceil(price1 - price1 * (price2 / 100));
  },
  getFullPrice: function getFullPrice() {
    return +appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function getTitle() {
    const trimmed = appData.title.trimStart();
    return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
  },

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices(
      appData.fullPrice,
      appData.rollback,
    );
    appData.title = appData.getTitle();
    appData.logger();
  },
  logger: function () {
    for (let key in appData) {
      console.log("Ключ:" + key + " " + "Значение:" + appData[key]);
    }
    // console.log(appData.fullPrice);
    // console.log(appData.servicePercentPrice);
  },
};
appData.start();
// console.log(!isNaN(parseFloat("10")) && isFinite("10"));

// lowerScreen = screens.toLowerCase();
// arr = lowerScreen.split(", ");

// lesson06

// confirm("Игра окончена");
// alert("Hello world!");
//   do {
//
//   } while ;

// const randomNumber = Math.floor(Math.random() * 100) + 1;

// function checkNumber(x) {
//   function getNumber() {
//     const findNumber = prompt("Угадай число от 1 до 100");
//     console.log(x);

//     if (findNumber === null) {
//       alert("Игра окончена");
//       return;
//     } else if (!isNumber(findNumber)) {
//       alert("Введите число!");
//       getNumber();
//     } else if (findNumber > x) {
//       alert("Загаданное число меньше");
//       getNumber();
//     } else if (findNumber < x) {
//       alert("Загаданное число больше");
//       getNumber();
//     } else if (findNumber == x) {
//       alert("Поздравляю, Вы угадали!!!");
//     }
//   }
//   getNumber();
// }
// checkNumber(randomNumber);
