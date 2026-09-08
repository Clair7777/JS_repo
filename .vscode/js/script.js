"use strict";

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll(".other-items.number");

const input = document.querySelector('.rollback input[type="range"]');
const spanValue = document.querySelector(".rollback .range-value");

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  countScreens: 0,

  init: function () {
    appData.addTitle();

    appData.checkFields();

    startBtn.addEventListener("click", appData.start);
    buttonPlus.addEventListener("click", appData.addScreenBlock);

    document.addEventListener("input", appData.checkFields.bind(appData));
    document.addEventListener("change", appData.checkFields.bind(appData));
  },
  addTitle: function () {
    document.title = title.textContent;
  },

  checkFields: function () {
    // Каждый раз заново запрашиваем экраны с актуальным количеством на странице
    screens = document.querySelectorAll(".screen");
    let isValid = true;

    screens.forEach(function (screen) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");

      const isSelectFilled = select && select.value !== "";
      const isInputFilled =
        input && input.value.trim() !== "" && Number(input.value) > 0;

      if (!isSelectFilled || !isInputFilled) {
        isValid = false;
      }
    });

    // Управляем доступностью кнопки "Рассчитать"
    startBtn.disabled = !isValid;
  },

  start: function () {
    appData.addScreens();
    appData.addServices();

    appData.addPrices();

    // appData.logger();

    appData.showResult();
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCount.value = appData.countScreens;
  },

  addScreens: function () {
    // Очищаем массив перед расчетом, чтобы данные не дублировались при повторном нажатии
    appData.screens = [];

    screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
      });

      appData.countScreens = +appData.countScreens + +input.value;
    });
    console.log(appData.countScreens);
  },
  addServices: function () {
    otherItemsPercent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text");
      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text");
      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    // Обновляем список экранов перед клонированием
    screens = document.querySelectorAll(".screen");
    const cloneScreen = screens[0].cloneNode(true);

    // Очищаем значения в клонированном блоке, чтобы новый экран появлялся пустым
    cloneScreen.querySelector("select").value = "";
    cloneScreen.querySelector("input").value = "";

    screens[screens.length - 1].after(cloneScreen);

    // ВАЖНО: Так как добавился новый пустой блок, нужно сразу заблокировать кнопку "Рассчитать"
    appData.checkFields();
  },

  isString: function (str) {
    return isNaN(str) && str !== null;
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesNumber +
      appData.servicePricesPercent;

    appData.input = input.value;
    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (input.value / 100),
    );

    totalCountRollback.value = appData.servicePercentPrice;
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);
  },
};

appData.init();
