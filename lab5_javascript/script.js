// script.js 
document.getElementById("pesan").textContent = "Hello World"; 
console.log("Hello World");


function cekBilangan() { 
  const input = document.getElementById("bilangan").value; 
  const angka = Number(input); 
  const hasil = document.getElementById("hasilBilangan"); 
 
  if (input.trim() === "" || !Number.isInteger(angka)) { 
    hasil.textContent = "Kolom Tidak Boleh Kosong."; 
  } else if (angka % 2 === 0) { 
    hasil.textContent = "True"; 
  } else { 
    hasil.textContent = "False"; 
  } 
} 