const targetDate = new Date("2024-05-10T00:00:00");

const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(interval);
    document.querySelector(".geri-sayim h2").textContent = "Konferans Başladı!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.querySelector(".gunler span").textContent = days;
  document.querySelector(".saatler span").textContent = hours;
  document.querySelector(".dakikalar span").textContent = minutes;
  document.querySelector(".saniyeler span").textContent = seconds;
};

const interval = setInterval(updateCountdown, 1000);
