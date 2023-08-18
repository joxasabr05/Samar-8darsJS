"use strict";
const numberOFSeries = +prompt("Nechta serial ko'rdingiz", "");

const seriesDB = {
  count: numberOFSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
};
const firstFilmInfo = prompt("Oxirgi ko'rgan serialingiz"),
  lastFilmInfo = prompt("Nechi baxo berasiz"),
  firstFilmInf2 = prompt("Oxirgi ko'rgan serialingiz"),
  lastFilmInfo2 = prompt("Nechi baxo berasiz");

seriesDB.series[firstFilmInfo] = lastFilmInfo;
seriesDB.series[firstFilmInf2] = lastFilmInfo2;

const theif = {
  jacket: "black",
};
const property = "age",
  value = 30;
theif[property] = value;
console.log(theif);

console.log(seriesDB);
