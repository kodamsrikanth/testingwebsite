
// Set the date for the offer expiration (1 day from now)
let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

// Update the countdown every second
let countdown = setInterval(function() {

  const now = new Date().getTime();
  let distance = countDownDate - now;

  // Reset automatically after 24 hours
  if (distance <= 0) {
    countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
    distance = countDownDate - now;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days1").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours1").innerHTML = hours.toString().padStart(2, "0");
  document.getElementById("minutes1").innerHTML = minutes.toString().padStart(2, "0");
  document.getElementById("seconds1").innerHTML = seconds.toString().padStart(2, "0");

}, 1000);




document.querySelectorAll('.faq .accordion-container .accordion').forEach(accordion => {
    accordion.onclick = () => {
        accordion.classList.toggle('active');
    }
})
