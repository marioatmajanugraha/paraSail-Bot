# Parasail-Node-Bot 🚀
Script ini digunakan untuk mengotomatiskan proses onboarding node di Parasail 

![photo_2025-03-27_13-32-45](https://github.com/user-attachments/assets/46fba605-76fe-4e99-8238-6e4af773dba3)

---

## 📌 Fitur
- ✅ Auto onboarding node untuk Parasail Airdrop menggunakan token dari `tokens.txt`
- 🔌 Dukungan proxy (`proxy.txt`) untuk koneksi aman (http, socks5, socks4)
- 🎁 Menampilkan status onboarding secara real-time di console
- ⚡ Tampilan console rapi dengan emoji dan warna menggunakan `chalk` dan `cfonts`
- 🎮 Prompt interaktif untuk memilih penggunaan proxy

---

## 🚀 Cara Penggunaan

1. **Clone repository ini**
```
git clone https://github.com/marioatmajanugraha/paraSail-Bot.git
cd paraSail-Bot
```
2. **Install Dependencies**
```
npm install axios chalk@4 cfonts http-proxy-agent socks-proxy-agent ethers
```

3. **Siapkan file konfigurasi**
Buat file tokens.txt dan isi dengan token JWT, satu token per baris. Contoh:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

4. **Buat file wallets.json dan isi dengan daftar wallet address. Contoh:**
```
[
  {"address": "0x424e6Db16823e348E38E80e5586C53448A1c9B26"},
  {"address": "0xB05d9d97158b84C94C499e917be7F2Dd930405f4"}
]
```

5. **(Opsional) Buat proxy.txt jika ingin menggunakan proxy. Contoh:**
```
http://username:password@host:port
socks5://username:password@host:port
```

6. **Jalankan Script**
- Run Task
```
node task.obf.js
```
- Run Onboarding Node
```
node node.obf.js
```

7. **Ikuti Instruksi**
- Jawab prompt "Mau menggunakan proxy? (y/n):" dengan y atau n.
- Script akan otomatis menjalankan proses onboarding untuk setiap token dan wallet.

## ⚠️ Disclaimer
Gunakan script ini dengan bijak dan sesuai aturan Parasail Airdrop.

Developer tidak bertanggung jawab atas penyalahgunaan atau banned akun.

## 🤝 Kontribusi
Jika ingin berkontribusi, silakan fork repo ini dan ajukan pull request! Kami terbuka untuk ide baru dan perbaikan.

## 📞 Kontak
Jika ada pertanyaan, hubungi: [@balveerxyz](https://t.me/balveerxyz)

Join channel Telegram gratis: [Airdrop 888](https://t.me/airdroplocked)
