const targetDate = new Date("2024-05-10");

const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.querySelector(".gunler span").textContent = days;
  document.querySelector(".saatler span").textContent = hours;
  document.querySelector(".dakikalar span").textContent = minutes;
  document.querySelector(".saniyeler span").textContent = seconds;

  if (diff <= 0) {
    clearInterval(interval);
    document.querySelector(".geri-sayim h2").textContent = "Konferans Başladı!";
  }
};

const interval = setInterval(updateCountdown, 1000);