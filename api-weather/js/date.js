//오늘 날짜 생성
let date = new Date();
let FullYear = String(date.getFullYear());
let Month = String(date.getMonth()+1).padStart(2,0);
let Day = String(date.getDate()).padStart(2,0);
let Today = FullYear+Month+Day;
// console.log(Today);