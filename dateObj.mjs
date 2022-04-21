//General date format = Thu, 21 Apr 2022

//Create month array
const months = ["Jan", "Feb", "Mar", "Apr", "May", "jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];  

//Create day of the week array
const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

//Create date variables
export const d = new Date();
export let weekDay = dayOfWeek[d.getDay()];
export let day = d.getDate();
export let month = months[d.getMonth()];
export let year = d.getFullYear();

//Export date variables
export {d, weekDay, day, month, year};
   
