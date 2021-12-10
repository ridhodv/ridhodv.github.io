/*
Need
Current time
Different time
Each times: days, hours, minutes, seconds
Year
Interval
countdown
Ternary Oerator 
Loading
*/



const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const countDown = document.getElementById('countDown');
const year = document.getElementById('year');


const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear +1} 00:00:00`);

year.innerText = currentYear + 1;

// Initial count
function updateCountDown() {
  const currentTime = new Date();
  const diffTime = newYearTime - currentTime;
  
  const d = Math.floor(diffTime / 1000 / 60 / 60 / 24); //days
  
 const h = Math.floor(diffTime / 1000 / 60 / 60) % 24;// hours
 const m = Math.floor(diffTime / 1000 /60) % 60;// minutes
 const s = Math.floor(diffTime / 1000) % 60;// seconds
 
 // console.log(d);
 // console.log(h);
 // console.log(m);
 // console.log(s);
  
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// setTimeout() remove the loading and display the countdown
setTimeout(() => {
  loading.remove();
  countDown.style.display = 'flex';
}, 1500)

setInterval(updateCountDown, 1000)