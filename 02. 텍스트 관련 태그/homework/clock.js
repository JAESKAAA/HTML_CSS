// const clock = document.getElementsById("timer");
const clockContainer = document.querySelector("h1");

var today = new Date();
var nowYear = today.getFullYear();
var nowMonth = today.getMonth()+1;
var nowDate = today.getDate();

console.log(today);

document.write("현재 년도"+nowYear+"<br>");
document.write("현재 월"+nowMonth+"<br>");
document.write("현재 일"+nowDate+"<br>");

let dday = new Date(2021, 9, 16);

let result = Math.ceil((dday.getTime() - today.getTime()) / (1000*60*60*24));

