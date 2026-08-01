"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 77;
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);

console.log(typeof title + ", " + typeof fullPrice + ", " + typeof adaptive);
console.log(screens.length);
console.log(
  "Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юаней",
);
console.log(
  "Стоимость разработки сайта " + fullPrice + " рублей/долларов/гривен/юаней",
);

let lowerScreens = screens.toLowerCase();
let arr = lowerScreens.split(", ");
console.log(arr);
console.log(fullPrice * (rollback / 100));

let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
console.log(servicePercentPrice);

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что-то пошло не так");
}
