const gunSeciciler = document.querySelectorAll(".gun-secici");
const programIcerik = document.querySelector(".program-icerik");

// Sample program data (replace with your actual data)
const programData = {
  "10": "10 Mayıs programı buraya gelecek...",
  "11": "11 Mayıs programı buraya gelecek...",
  "12": "12 Mayıs programı buraya gelecek..."
};

gunSeciciler.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    gunSeciciler.forEach(b => b.classList.remove("aktif"));
    // Add active class to clicked button
    button.classList.add("aktif");
    // Get the selected day
    const secilenGun = button.dataset.gun;
    // Update program content
    programIcerik.textContent = programData[secilenGun];
  });
});

// Initially show the program for the first day
gunSeciciler[0].click();