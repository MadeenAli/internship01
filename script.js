// Set the countdown end date
const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

const countdownFunction = setInterval(() => {
  // Get current date and time
  const now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  const distance = countdownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the results in the respective elements
  document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

  // If the countdown is over, stop the interval
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);


$('.product-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 3,
  arrows: true,
  dots: true
});