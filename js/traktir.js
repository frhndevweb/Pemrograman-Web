function generateQRCode() {
  const amount = document.getElementById("amount").value;

  if (!amount || amount < 1000) {
    alert("Masukkan nominal minimal Rp 1.000");
    return;
  }

  const danaNumber = "088215660319"; // Ganti dengan nomor Dana kamu
  const paymentMessage = `DanaTransfer:${danaNumber}?amount=${amount}`;

  // QR Code Dinamis
  const qrCodeDiv = document.getElementById("qrcode");
  qrCodeDiv.innerHTML = ""; // Clear QR Code sebelumnya
  QRCode.toCanvas(qrCodeDiv, paymentMessage, { width: 200 }, (error) => {
    if (error) console.error(error);
  });

  // QR Code Statis (untuk diunduh)
  const qrCodeCanvas = document.getElementById("qrcodeCanvas");
  QRCode.toCanvas(qrCodeCanvas, paymentMessage, { width: 200 }, (error) => {
    if (error) console.error(error);
  });

  // Generate Download Link
  const downloadLink = document.getElementById("download-link");
  downloadLink.href = qrCodeCanvas.toDataURL("image/png");

  document.querySelector(".donation-form").classList.add("hidden");
  document.getElementById("qrcode-section").classList.remove("hidden");

  // Tampilkan Nominal Donasi
  const donationMessage = document.getElementById("donation-message");
  donationMessage.textContent = `Nominal Traktir: Rp ${amount}`;
}

function backToForm() {
  document.getElementById("qrcode-section").classList.add("hidden");
  document.querySelector(".donation-form").classList.remove("hidden");
}
