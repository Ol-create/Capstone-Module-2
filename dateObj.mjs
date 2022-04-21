//General date format = Thu, 21 Apr 2022

//Create month array
const months = ["Jan", "Feb", "Mar", "Apr", "May", "jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//Create day of the week array
const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

//Create date variables
const d = new Date();
let weekDay = dayOfWeek[d.getDay()];
let day = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

let presentDate = `${weekDay}, ${day} ${month} ${year}`;

//Export date variables
export {presentDate};

console.log(presentDate);
