
Tugas Post Test Praktikum 5

# Lab5Web — Praktikum 5: JavaScript Dasar dan Manipulasi HTML


Repository ini berisi hasil pengerjaan **Praktikum 5 — JavaScript Dasar dan Manipulasi HTML** pada mata kuliah **Pemrograman Web** (Pertemuan 6).

## 👤 Identitas

| Keterangan    | Isi                                              |
|---------------|--------------------------------------------------|
| Nama          | Fajar Dwi Santoso                                |
| NIM           | 312510141                                        |
| Program Studi | Teknik Informatika                               |
| Fakultas      | Teknik                                           |
| Universitas   | Universitas Pelita Bangsa                        |
| Mata Kuliah   | Pemrograman Web                                  |
| Pertemuan     | 6                                                |
| Topik         | JavaScript dasar dan manipulasi elemen HTML      |

---

## 📑 Daftar Isi

1. [Tujuan Praktikum](#-tujuan-praktikum)
2. [Cakupan Materi](#-cakupan-materi)
3. [Perangkat yang Digunakan](#-perangkat-yang-digunakan)
4. [Struktur Folder](#-struktur-folder)
5. [Cara Menjalankan](#-cara-menjalankan)
6. [Langkah Kerja dan Hasil Praktikum](#-langkah-kerja-dan-hasil-praktikum)
7. [Mini Project: Kalkulator Nilai Mahasiswa](#-mini-project-kalkulator-nilai-mahasiswa)
8. [Eksperimen Mandiri](#-eksperimen-mandiri)
9. [Pertanyaan dan Jawaban](#-pertanyaan-dan-jawaban)
10. [Kesimpulan](#-kesimpulan)
11. [Referensi](#-referensi)

---

## 🎯 Tujuan Praktikum

1. Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.
2. Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui `console`, `alert`, `prompt`, dan elemen HTML.
4. Memanipulasi konten serta gaya elemen HTML menggunakan JavaScript.
5. Membuat interaksi sederhana pada form dan melakukan validasi input.
6. Mendokumentasikan pekerjaan praktikum beserta hasil pengujiannya.

## 📚 Cakupan Materi

Variabel, tipe data, operator, percabangan (`if–else`, `switch`), perulangan (`for`, `while`), function, output (`console.log`, `alert`, `prompt`, `textContent`), DOM, form, dan validasi input.

## 📁 Struktur Folder

```
Lab5Web/
├── index.html
├── script.js
├── README.md

```

## ▶️ Cara Menjalankan

1. Clone repository ini:
   ```bash
   git clone https://github.com/<username>/Lab5Web.git
   ```
2. Masuk ke folder proyek:
   ```bash
   cd Lab5Web
   ```
3. Buka `index.html` menggunakan browser (klik dua kali, atau gunakan ekstensi **Live Server** pada VS Code).
4. Buka **Inspect/Periksa → Console** (`F12`) untuk melihat output `console.log`.

---

## 🧪 Langkah Kerja dan Hasil Praktikum

### Persiapan

1. Membuat folder kerja `lab5_javascript`.
2. Membuat file `index.html` dan `script.js` di dalam folder tersebut.
3. Menyalin kerangka HTML dasar, lalu menghubungkan `script.js` dengan tag `<script src="script.js"></script>` di akhir `<body>`.
4. Menjalankan `index.html` di browser dan membuka Console.

Kerangka `index.html`:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Praktikum JavaScript</title>
</head>
<body>
  <h1>Pengenalan JavaScript</h1>
  <p id="pesan">Konten awal.</p>
  <script src="script.js"></script>
</body>
</html>
```

---

### Latihan 1 — Menampilkan Output

**Tujuan:** mengenali cara menampilkan output di halaman dan Console.

```javascript
// script.js
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");
```

**Hasil pengamatan:**
- Teks pada halaman berubah menjadi **"Hello World"**.
- Pesan **"Hello World"** juga tampil di Console.
- Perbedaan: output pada halaman dapat dilihat oleh semua pengguna, sedangkan output Console hanya terlihat oleh developer melalui Developer Tools.

**Screenshot:**

<img width="1365" height="767" alt="Screenshot 2026-10-24 211137" src="https://github.com/user-attachments/assets/3787b268-c271-449e-8435-3aef371065d6" />
---

### Latihan 2 — Alert dan Prompt

```javascript
const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}
```

**Pengujian:**

| Skenario            | Hasil yang Diharapkan                                  |
|---------------------|--------------------------------------------------------|
| Memasukkan nama     | Muncul alert sapaan dan teks halaman berubah           |
| Menekan **Cancel**  | `prompt` bernilai `null` → alert "Nama belum diisi."   |
| Input dikosongkan   | String kosong → alert "Nama belum diisi."              |

**Screenshot:**

<img width="1360" height="755" alt="Screenshot 2026-10-24 211408" src="https://github.com/user-attachments/assets/d3bb5e05-edf5-4f28-a6c1-4db2ad8ab7ea" />
<img width="1365" height="767" alt="Screenshot 2026-10-24 211416" src="https://github.com/user-attachments/assets/a1ed87e7-5080-4c93-a922-1efc9be483a4" />


---

### Latihan 3 — Function dan Operasi Aritmetika

```javascript
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}

operasiDasar(9, 4);
```

**Hasil di Console untuk `operasiDasar(9, 4)`:**

```
Penjumlahan: 13
Pengurangan: 5
Perkalian: 36
Pembagian: 2.25
Modulus: 1
```

**Screenshot:**

<img width="1365" height="767" alt="Screenshot 2026-10-24 211924" src="https://github.com/user-attachments/assets/aa9a664c-4995-4800-8535-097c99430c43" />
---

### Latihan 4 — Seleksi Kondisi `if–else`

Nilai minimal **60** dinyatakan lulus. Karena `prompt` menghasilkan string, input dikonversi menggunakan `Number()`.

```javascript
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);

if (inputNilai === null || inputNilai.trim() === "" ||
    Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}
```

**Pengujian:**

| Input      | Hasil                    |
|------------|--------------------------|
| `75`       | Lulus                    |
| `60`       | Lulus                    |
| `45`       | Belum lulus              |
| `150`      | Input nilai tidak valid. |
| `abc`      | Input nilai tidak valid. |
| *(kosong)* | Input nilai tidak valid. |

**Screenshot:**

<img width="1365" height="767" alt="Screenshot 2026-10-24 212312" src="https://github.com/user-attachments/assets/fee3886f-0a00-424d-9ce0-18f51853613b" />
<img width="1365" height="767" alt="Screenshot 2026-10-24 212325" src="https://github.com/user-attachments/assets/d5447975-9591-4175-9e1b-239bf05b343a" />

---

### Latihan 5 — Seleksi Kondisi `switch`

```javascript
const inputPilihan = prompt("Masukkan angka 1–5:");

switch (inputPilihan) {
  case "1": alert("Bilangan satu"); break;
  case "2": alert("Bilangan dua"); break;
  case "3": alert("Bilangan tiga"); break;
  case "4": alert("Bilangan empat"); break;
  case "5": alert("Bilangan lima"); break;
  default: alert("Pilihan tidak tersedia");
}
```

**Hasil pengamatan:** angka 1–5 menampilkan nama bilangan yang sesuai, sedangkan masukan lain menampilkan "Pilihan tidak tersedia".

**Screenshot:**

<img width="1365" height="762" alt="Screenshot 2026-10-24 212620" src="https://github.com/user-attachments/assets/a16b3325-71c1-4d69-8ac1-7a0cd0f98379" />
<img width="1365" height="763" alt="Screenshot 2026-10-24 212632" src="https://github.com/user-attachments/assets/4d37af79-cd50-487c-931a-2f1fc6098d16" />

---

### Latihan 6 — Form Bilangan Genap atau Ganjil

**HTML (di dalam `<body>`):**

```html
<label for="bilangan">Masukkan bilangan bulat:</label>
<input type="number" id="bilangan" step="1">
<button type="button" onclick="cekBilangan()">Periksa</button>
<p id="hasilBilangan"></p>
```

**JavaScript:**

```javascript
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}
```

**Pengujian:**

| Input      | Hasil                                  |
|------------|----------------------------------------|
| `8`        | Bilangan genap                         |
| `7`        | Bilangan ganjil                        |
| `-4`       | Bilangan genap                         |
| `-3`       | Bilangan ganjil                        |
| `0`        | Bilangan genap                         |
| `3.5`      | Masukkan bilangan bulat yang valid.    |
| *(kosong)* | Masukkan bilangan bulat yang valid.    |

**Screenshot:**

<img width="1365" height="767" alt="Screenshot 2026-10-24 214018" src="https://github.com/user-attachments/assets/4d46f878-1cd8-48ea-80d9-add159daa006" />
<img width="1365" height="765" alt="Screenshot 2026-10-24 214030" src="https://github.com/user-attachments/assets/cac34ccd-3dfb-4f47-b241-bc17a6ccdf7a" />
<img width="1365" height="767" alt="Screenshot 2026-10-24 214039" src="https://github.com/user-attachments/assets/18a433a5-03ca-41a8-b402-3436df94f550" />
<img width="1365" height="725" alt="Screenshot 2026-10-24 214126" src="https://github.com/user-attachments/assets/ea1fd6e8-6168-4a9d-a04d-d5a824e1f3ba" />
<img width="1348" height="767" alt="Screenshot 2026-10-24 214137" src="https://github.com/user-attachments/assets/a090f2fd-a8cd-4fb8-834f-ad7d383c77f0" />

---

### Latihan 7 — Mengubah Warna Halaman

Menggunakan **satu function dengan parameter** agar kode tidak berulang.

```javascript
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}
```

```html
<button type="button" onclick="ubahWarnaLatar('lightgreen')">Latar Hijau</button>
<button type="button" onclick="ubahWarnaLatar('white')">Latar Putih</button>
<button type="button" onclick="ubahWarnaLatar('lightyellow')">Latar Kuning</button>
```

**Hasil pengamatan:** warna latar halaman berubah sesuai tombol yang ditekan.

**Screenshot:**

<img width="1365" height="767" alt="Screenshot 2026-10-24 214523" src="https://github.com/user-attachments/assets/74219d6a-77ed-421f-8492-f0758774fc39" />
<img width="1365" height="760" alt="Screenshot 2026-10-24 214539" src="https://github.com/user-attachments/assets/98ce6b68-2ce2-4633-b398-146e975000a3" />
<img width="1365" height="762" alt="Screenshot 2026-10-24 214546" src="https://github.com/user-attachments/assets/9bfffd35-14be-4da3-b845-d45a17c1bd48" />


---

### Latihan 8 — DOM dan Checkbox Menu Makanan

Total harga berubah otomatis ketika pilihan dicentang atau dilepas.

**HTML:**

```html
<h3>Daftar Menu Makanan</h3>
<label><input type="checkbox" class="menu" value="5000"> Ayam Goreng — Rp5.000</label><br>
<label><input type="checkbox" class="menu" value="500"> Tempe — Rp500</label><br>
<label><input type="checkbox" class="menu" value="2500"> Telur Dadar — Rp2.500</label><br>
<p>Total: Rp<span id="total">0</span></p>
```

**JavaScript:**

```javascript
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}
```

**Hasil pengamatan:**

| Menu yang Dipilih                  | Total      |
|------------------------------------|------------|
| Tidak ada                          | Rp0        |
| Ayam Goreng                        | Rp5.000    |
| Ayam Goreng + Tempe                | Rp5.500    |
| Ayam Goreng + Tempe + Telur Dadar  | Rp8.000    |

> Script diletakkan di akhir `<body>` agar seluruh elemen HTML sudah tersedia sebelum script dijalankan.

**Screenshot:**

<img width="1365" height="767" alt="Screenshot 2026-10-24 220452" src="https://github.com/user-attachments/assets/a55f1b3a-c8dc-41e1-a60d-a1b28c6f5948" />
<img width="1365" height="767" alt="Screenshot 2026-10-24 220514" src="https://github.com/user-attachments/assets/da349d41-9d82-4ba2-a1cf-3644f143f7c1" />

---

## 🧮 Mini Project: Kalkulator Nilai Mahasiswa

Program menerima nilai **Tugas**, **UTS**, dan **UAS**, menghitung nilai akhir, menentukan predikat, serta menampilkan status kelulusan pada halaman HTML.

**Rumus nilai akhir:** `Tugas × 30% + UTS × 30% + UAS × 40%`

**Konversi predikat:**

| Nilai Akhir | Predikat |
|-------------|----------|
| ≥ 85        | A        |
| ≥ 75        | B        |
| ≥ 60        | C        |
| ≥ 50        | D        |
| < 50        | E        |

Status **Lulus** jika nilai akhir ≥ 60, selain itu **Belum lulus**.

### HTML

```html
<h2>Kalkulator Nilai Mahasiswa</h2>

<label for="tugas">Nilai Tugas:</label>
<input type="number" id="tugas" min="0" max="100"><br>

<label for="uts">Nilai UTS:</label>
<input type="number" id="uts" min="0" max="100"><br>

<label for="uas">Nilai UAS:</label>
<input type="number" id="uas" min="0" max="100"><br>

<button type="button" id="btnHitung">Hitung</button>

<div id="hasilNilai"></div>
```

### JavaScript

```javascript
// ---------- Proses perhitungan ----------
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

// ---------- Validasi ----------
function nilaiValid(teks) {
  if (teks.trim() === "") return false;
  const n = Number(teks);
  return !Number.isNaN(n) && n >= 0 && n <= 100;
}

// ---------- Tampilan hasil ----------
function prosesNilai() {
  const inTugas = document.getElementById("tugas").value;
  const inUts = document.getElementById("uts").value;
  const inUas = document.getElementById("uas").value;
  const hasil = document.getElementById("hasilNilai");

  if (!nilaiValid(inTugas) || !nilaiValid(inUts) || !nilaiValid(inUas)) {
    hasil.textContent = "Semua nilai harus diisi dengan angka pada rentang 0–100.";
    return;
  }

  const akhir = hitungNilaiAkhir(Number(inTugas), Number(inUts), Number(inUas));
  const predikat = tentukanPredikat(akhir);
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";

  hasil.innerHTML =
    "<p>Nilai akhir: <strong>" + akhir.toFixed(2) + "</strong></p>" +
    "<p>Predikat: <strong>" + predikat + "</strong></p>" +
    "<p>Status: <strong>" + status + "</strong></p>";
}

document.getElementById("btnHitung").addEventListener("click", prosesNilai);
```

### Skenario Pengujian

| No | Tugas | UTS | UAS | Nilai Akhir | Predikat | Status      |
|----|-------|-----|-----|-------------|----------|-------------|
| 1  | 85    | 78  | 88  | 84,05       | B        | Lulus       |
| 2  | 90    | 90  | 95  | 92,00       | A        | Lulus       |
| 3  | 40    | 50  | 45  | 45,00       | E        | Belum lulus |
| 4  | 120   | 80  | 70  | *Ditolak*   | —        | Input tidak valid (di luar 0–100) |

**Screenshot:**

<img width="1365" height="627" alt="Screenshot 2026-10-24 221748" src="https://github.com/user-attachments/assets/1f501c6b-1536-4d07-9a87-5315e6237589" />
<img width="1365" height="633" alt="Screenshot 2026-10-24 221843" src="https://github.com/user-attachments/assets/2676b997-eb0e-4e59-aba2-9c8cdff793bf" />
<img width="1365" height="631" alt="Screenshot 2026-10-24 221855" src="https://github.com/user-attachments/assets/ebb01dec-2516-473e-be40-7bb387a2aab5" />


---

## 🔬 Eksperimen Mandiri

### 1. Latihan 3 dengan input `prompt` yang dikonversi ke `number`

```javascript
const a = Number(prompt("Masukkan bilangan pertama:"));
const b = Number(prompt("Masukkan bilangan kedua:"));

if (Number.isNaN(a) || Number.isNaN(b)) {
  alert("Input harus berupa angka.");
} else {
  operasiDasar(a, b);
}

<img width="1365" height="767" alt="Screenshot 2026-10-24 222915" src="https://github.com/user-attachments/assets/c3cffae5-05b0-4221-a3cc-6f71079d9162" />
<img width="557" height="679" alt="Screenshot 2026-10-24 222945" src="https://github.com/user-attachments/assets/8fb5faf1-1c58-4b77-8292-fff3266fe5be" />
<img width="1365" height="767" alt="Screenshot 2026-10-24 222905" src="https://github.com/user-attachments/assets/7315a175-de88-4bf9-b4ed-8076d7e603da" />


```

### 2. Tabel perkalian angka 7 (1–10)

```javascript
for (let i = 1; i <= 10; i++) {
  console.log("7 x " + i + " = " + (7 * i));
}

<img width="555" height="634" alt="Gambar" src="https://github.com/user-attachments/assets/b181151d-8edb-4713-b2cc-1f9a3cfbc69c" />

```

### 3. Function `cekGenap(angka)`

```javascript
function cekGenap(angka) {
  return angka % 2 === 0;
}

console.log(cekGenap(10)); // true
console.log(cekGenap(7));  // false
<img width="1365" height="767" alt="Screenshot 2026-10-24 223740" src="https://github.com/user-attachments/assets/7a5a1fc2-c0e5-40c8-91db-c273d1385cc4" />

<img width="1365" height="767" alt="Screenshot 2026-10-24 223749" src="https://github.com/user-attachments/assets/def222ac-9779-46ea-9b66-d0973d65affb" />

```

### 4. Validasi form: kolom tidak boleh kosong

```javascript
function validasiKolom(idInput) {
  const nilai = document.getElementById(idInput).value;
  if (nilai.trim() === "") {
    alert("Kolom tidak boleh kosong.");
    return false;
  }
  return true;
}

<img width="1365" height="767" alt="Screenshot 2026-10-24 224025" src="https://github.com/user-attachments/assets/75213611-95d7-4040-a99e-2b6af65e21bf" />

```

### 5. Menambah pilihan menu pada Latihan 8

```html
<label><input type="checkbox" class="menu" value="4000"> Nasi Putih — Rp4.000</label><br>
<label><input type="checkbox" class="menu" value="3000"> Es Teh — Rp3.000</label><br>

<img width="1365" height="767" alt="Screenshot 2026-10-24 225327" src="https://github.com/user-attachments/assets/114b0bd9-64f1-432b-8d1b-54085b897825" />

```

### 6. Tombol sembunyikan/tampilkan elemen

```html
<button type="button" onclick="toggleElemen()">Sembunyikan / Tampilkan</button>
<p id="teksToggle">Teks ini dapat disembunyikan.</p>
```

```javascript
function toggleElemen() {
  const el = document.getElementById("teksToggle");
  el.style.display = (el.style.display === "none") ? "block" : "none";
}

<img width="1365" height="767" alt="Screenshot 2026-10-24 230056" src="https://github.com/user-attachments/assets/daa4c425-487f-44d6-b4ca-e487a29cdb43" />
<img width="1365" height="767" alt="Screenshot 2026-10-24 230041" src="https://github.com/user-attachments/assets/8fca8b8b-da36-46b7-823a-ff9c705d8e15" />

```

---

## ✅ Kesimpulan

Melalui praktikum ini, saya dapat:

- Menghubungkan JavaScript eksternal (`script.js`) dengan halaman HTML.
- Menggunakan variabel (`let`, `const`), tipe data, operator, percabangan, perulangan, dan function.
- Menampilkan output melalui Console, `alert`, `prompt`, dan elemen HTML.
- Memanipulasi konten dan gaya elemen HTML melalui DOM.
- Membuat interaksi form sederhana disertai validasi input.

## 📖 Referensi

1. Flanagan, D. (2020). *JavaScript: The Definitive Guide* (7th ed.). O'Reilly Media.
2. MDN Web Docs. *JavaScript Guide*. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
3. Rencana Pembelajaran Semester (RPS) Mata Kuliah Pemrograman Web, Pertemuan 6: JavaScript dasar — variabel, tipe data, operator, percabangan, perulangan, dan function.
