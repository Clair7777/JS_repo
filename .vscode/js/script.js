"use strict";
// let lowerScreen;
// let lowerScreens;
// let arr;

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  asking: function () {
    // appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    do {
      appData.title = prompt("Как называется ваш проект?");
    } while (!appData.isString(appData.title));

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (!appData.isString(name));

      do {
        price = prompt("Сколько будет стоить данная работа?", 200);
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let servicePrice = 0;
      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (!appData.isString(name));

      do {
        servicePrice = prompt("Сколько это будет стоить?", 100);
      } while (!appData.isNumber(servicePrice));

      appData.services[name] = +servicePrice;

      // sum += +servicePrice;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  isString: function (str) {
    return isNaN(str) && str !== null;
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
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

  getServicePercentPrices: function getServicePercentPrices(price1, price2) {
    appData.servicePercentPrice = Math.ceil(price1 - price1 * (price2 / 100));
  },
  getFullPrice: function getFullPrice() {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function getTitle() {
    appData.title =
      appData.title.trimStart()[0].toUpperCase() +
      appData.title.trimStart().slice(1).toLowerCase();
  },

  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    appData.getTitle();
    appData.logger();
  },
  logger: function () {
    // for (let key in appData) {
    //   console.log("Ключ:" + key + " " + "Значение:" + appData[key]);
    // }
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
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
