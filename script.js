var bars = document.getElementById("bars");
var content = document.querySelector(".nav-content");
bars.addEventListener("click", () => {
  content.classList.toggle("active");
});
content.addEventListener("click", () => {
  content.classList.remove("active");
});

var days = document.querySelector(".days");
var hours = document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");

function timer() {
  var currentyear = new Date().getFullYear();
  var newYear = new Date(`january 1 ${currentyear + 1} 00:00:00`);
  var currentDate = new Date();
  var difference = newYear - currentDate;
  var d = Math.floor(difference / 1000 / 60 / 60 / 24);
  var h = Math.floor((difference / 1000 / 60 / 60) % 24);
  var m = Math.floor((difference / 1000 / 60) % 60);
  var s = Math.floor((difference / 1000) % 60);

  days.innerHTML = d < 10 ? "0" + d : d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(timer, 1000);

