let title = "JS_project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1000;
let rollback = 77;
let fullPrice = 15000;
let adaptive = true;

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
