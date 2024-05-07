const gunSeciciler = document.querySelectorAll(".gun-secici");
const programIcerik = document.querySelector(".program-icerik");

// Program data (replace with actual data from the image)
const programData = {
  "10": [
    { saat: "12.00", etkinlik: "Hoş Geldiniz - Check-in" },
    { saat: "12.30-14.30", etkinlik: "Öğle Yemeği - Phaselis Restaurant" },
    { saat: "14.30-17.00", etkinlik: "Takım Oyunları" },
    { saat: "17.00-18.30", etkinlik: "Serbest Zaman" },
    { saat: "18.30-21.00", etkinlik: "Akşam Yemeği - Phaselis Restaurant" },
    { saat: "19.00-19.30", etkinlik: "Bayrak Töreni Salonuna Giriş" },
    { saat: "19.30-23.00", etkinlik: "Açılış Seremonisi & Bayrak Töreni" },
    { saat: "23.00-00.30", etkinlik: "Can Ozan & Deniz Tekin After Party" },
    { saat: "00.30-02.00", etkinlik: "Auf & Armin After Party" }
  ],
  "11": [
    { saat: "07.00-10.00", etkinlik: "Kahvaltı - Phaselis Restaurant" },
    { saat: "10.00-12.00", etkinlik: "Serbest Zaman" },
    { saat: "12.30-14.30", etkinlik: "Öğle Yemeği - Phaselis Restaurant" },
    { saat: "14.30-17.00", etkinlik: "Voleybol Cumhuriyet Maçı" },
    { saat: "17.00-18.30", etkinlik: "Serbest Zaman" },
    { saat: "18.30-19.00", etkinlik: "Gala Kokteyli / Salona Giriş" },
    { saat: "19.00-23.00", etkinlik: "Gala" },
    { saat: "23.00-02.00", etkinlik: "Gala Eğlencesi Ipop" },
    { saat: "00.30-02.00", etkinlik: "Auf & Armin After Party" } 
  ],
  "12": [
    { saat: "12.00", etkinlik: "Veda - Check-out" }
  ]
};

gunSeciciler.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    gunSeciciler.forEach(b => b.classList.remove("aktif"));
    // Add active class to clicked button
    button.classList.add("aktif");
    // Get the selected day
    const secilenGun = button.dataset.gun;
    // Update program table
    const programTabloBody = document.querySelector(".program-tablo tbody");
    programTabloBody.innerHTML = ""; // Clear existing rows

    programData[secilenGun].forEach(etkinlik => {
      const row = programTabloBody.insertRow();
      const saatCell = row.insertCell();
      const etkinlikCell = row.insertCell();
      saatCell.textContent = etkinlik.saat;
      etkinlikCell.textContent = etkinlik.etkinlik;
    });
  });
});

// Simulate click on the first button to load initial program
gunSeciciler[0].click();