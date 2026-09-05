"use strict";

const advBlock = document.querySelectorAll(".adv");
const books = document.querySelectorAll(".book");
const allBookLinks = document.querySelector(
  "body > aside > div:nth-child(5) > h2 > a",
);
const lists = document.querySelectorAll(
  "body > aside > div:nth-child(1) > ul > li",
);

const lists2 = document.querySelectorAll(
  "body > aside > div:nth-child(6) > ul > li",
);
const newElem = document.createElement("li");
console.log(newElem);
const book6_lists = document.querySelectorAll(
  "body > aside > div:nth-child(3) > ul > li",
);

advBlock[0].remove();
books[0].before(books[1]);
books[2].before(books[4]);
books[2].before(books[4]);
books[4].after(books[3]);
books[2].before(books[5]);

document.body.style.backgroundImage = "url('/image/you-dont-know-js.jpg')";
allBookLinks.textContent = "Книга 3. this и Прототипы Объектов";

lists[4].before(lists[6]);
lists[6].after(lists[8]);
lists[9].after(lists[2]);

lists2[3].before(lists2[9]);
lists2[4].after(lists2[2]);
lists2[8].before(lists2[5]);

newElem.textContent = "Глава 8: За пределами ES6";
newElem.classList.add("list");

// books[2].append(newElem);
book6_lists[9].before(newElem);
console.dir(book6_lists);
