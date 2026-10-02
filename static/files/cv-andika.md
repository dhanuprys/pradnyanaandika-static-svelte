**TERAKHIR DIPERBARUI: 01 OKTOBER 2026**
 
Ketentuan Layanan ("ToS") ini adalah dasar operasional yang mengatur hubungan antara Anda ("Pengguna", "Pemilik Akun") dan pengelola independen StemsiFast ("Kami", "Pengembang"). Platform SSO Authentication beroperasi sebagai pintu masuk sentral (*central gateway*) menuju seluruh ekosistem layanan yang Kami sediakan, termasuk namun tidak terbatas pada Aplikasi Karya, SASCA, dan aplikasi mitra lain yang mungkin ditambahkan ke dalam ekosistem ini di kemudian hari ("Aplikasi Mitra"). Dengan mengakses atau menggunakan Layanan, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh isi dokumen ini secara utuh.
 
---
 
### 1. Definisi Istilah
 
Untuk menghindari kesalahpahaman, istilah-istilah berikut memiliki arti sebagaimana didefinisikan di bawah ini:
 
- **"Layanan"** merujuk pada modul otentikasi tunggal (SSO) StemsiFast beserta seluruh infrastruktur pendukungnya.
- **"Ekosistem"** merujuk pada kumpulan Aplikasi Mitra yang menggunakan Layanan sebagai mekanisme login, baik yang sudah beroperasi maupun yang akan dirilis di masa mendatang.
- **"Token Akses/Sesi"** merujuk pada kredensial digital sementara (termasuk namun tidak terbatas pada *access token* dan *refresh token*) yang diterbitkan Layanan untuk memvalidasi identitas Pengguna di seluruh Ekosistem.
- **"Data Pribadi"** merujuk pada segala informasi yang teridentifikasi atau dapat diidentifikasi terhadap seseorang, baik secara langsung maupun tidak langsung, yang diperoleh melalui penggunaan Layanan.
- **"Keadaan Kahar" (*Force Majeure*)** merujuk pada peristiwa di luar kendali wajar Pengembang sebagaimana dirinci pada Pasal 11.
### 2. Fungsi Utama Layanan
 
SSO StemsiFast adalah infrastruktur otentikasi tunggal yang didesain secara independen untuk memfasilitasi verifikasi identitas (login) Pengguna. Platform ini menerbitkan Token Akses yang memungkinkan Pengguna berpindah antar-Aplikasi Mitra secara terintegrasi tanpa perlu melakukan proses login berulang.
 
Beberapa hal teknis yang perlu dipahami Pengguna sehubungan dengan sifat Layanan ini:
- Fungsi Layanan **sepenuhnya bergantung** pada ketersediaan dan stabilitas masing-masing Aplikasi Mitra yang menjadi konsumennya. Gangguan pada satu Aplikasi Mitra dapat memengaruhi pengalaman login di Aplikasi Mitra lain apabila keduanya berbagi infrastruktur yang sama.
- Aplikasi Mitra dapat ditambahkan, diubah, atau dihentikan dari Ekosistem sewaktu-waktu tanpa kewajiban pemberitahuan tersendiri kepada Pengguna, sepanjang perubahan tersebut tidak mengubah esensi pokok Layanan otentikasi ini.
- Kami tidak menjamin kompatibilitas Layanan dengan seluruh versi perangkat, sistem operasi, atau peramban yang beredar di pasaran.
### 3. Pengumpulan Kredensial dan Jejak Telemetri
 
Karena modul ini menangani keamanan identitas sentral, Kami akan menyerap data berikut:
 
- **Kredensial Autentikasi:** Nama Pengguna (*Username*), Kata Sandi (*Password*) yang diamankan menggunakan teknik *hashing* kriptografis searah, dan detail identitas esensial lainnya (misalnya alamat surel dan/atau nomor identitas institusi, apabila relevan).
- **Log Audit Keamanan (Telemetri):** Profil teknis meliputi model perangkat keras (*phone type*/*device model*), peramban (*User Agent browser*), rute alamat IP (*Internet Protocol*), dan metrik waktu historis dari seluruh aktivitas keberhasilan atau kegagalan transaksi login Anda.
- **Data Status Kehadiran (*Presence Data* — Online/Offline):** Kami turut merekam dan menyimpan cap waktu (*timestamp*) status daring (*online*) dan luring (*offline*) Pengguna pada sistem otentikasi, mencakup namun tidak terbatas pada: waktu login terakhir (*last login*), waktu logout atau kedaluwarsa sesi, durasi total sesi aktif, frekuensi perpindahan status daring/luring dalam suatu periode, dan interval tidak aktif (*idle time*) sebelum sesi otomatis berakhir. Data ini digunakan untuk keperluan keamanan, statistik penggunaan Layanan, dan sinkronisasi status antar-Aplikasi Mitra dalam Ekosistem.
- **Metadata Jaringan Tambahan:** Termasuk namun tidak terbatas pada jenis koneksi, zona waktu perangkat, dan bahasa antarmuka yang digunakan, sepanjang tersedia secara teknis.
### 4. Pengolahan Data dan Tujuan Penggunaan
 
Data yang masuk melalui gerbang otentikasi diproses untuk fungsi spesifik berikut:
 
- **Manajemen Otorisasi:** Menerbitkan dan memvalidasi tiket sesi masuk yang sah melintasi Ekosistem, termasuk menyinkronkan status daring/luring Pengguna agar Aplikasi Mitra dapat menampilkan indikator kehadiran secara konsisten.
- **Mitigasi Serangan Siber:** Menggunakan rekaman profil perangkat, IP, dan pola waktu login (termasuk data status kehadiran) untuk memantau lalu lintas login yang anomali. Deteksi kami berupaya mencegah eksploitasi pembobolan sandi (*brute-force*), pengambilalihan akun secara paralel (*session hijacking*), maupun login serentak dari perangkat yang mencurigakan.
- **Riset dan Ilmu Data:** Log tren akses, statistik volume login, pola durasi sesi, dan data agregat sejenis berpotensi diekstraksi untuk proyek penelitian internal, publikasi akademis, maupun inisiatif *Data Mining*. Implementasi ini dipastikan menaati regulasi penyaringan informasi, dengan melakukan **Penyamaran Data (*Data Masking*)** ketat agar tidak ada satu pun komponen identifikasi personal (PII) yang terdistribusi ke ranah eksternal.
- **Pemeliharaan dan Pengembangan Layanan:** Data teknis digunakan untuk mendiagnosis kegagalan sistem, merencanakan kapasitas server, dan memprioritaskan perbaikan berdasarkan pola penggunaan riil.
Kami **tidak** menjual Data Pribadi Pengguna kepada pihak ketiga untuk kepentingan komersial pihak tersebut.
 
### 5. Komitmen Pengolahan Data yang Bertanggung Jawab
 
Kami berupaya menyelenggarakan Layanan ini dengan mengedepankan praktik pengolahan data yang wajar, transparan, dan bertanggung jawab, sepanjang dapat dijangkau oleh kapasitas dan sumber daya Kami sebagai pengelola independen dan nirlaba. Namun demikian, mengingat keterbatasan sebagaimana dijelaskan pada Pasal 6, Pengguna memahami bahwa standar kepatuhan penuh setara entitas komersial berskala besar **tidak dapat Kami jaminkan**.
 
### 6. Sifat Independen, Keterbatasan Infrastruktur, dan Pembebasan Tanggung Jawab Pengembang
 
Platform SSO StemsiFast dikonstruksi secara mandiri, sukarela, dan **bukan wujud dari perjanjian penyediaan produk komersial berbayar** oleh institusi pendidikan maupun pihak sponsor mana pun terkait. Layanan ini dijalankan secara suka rela oleh Pengembang dengan sumber daya terbatas, dan dapat sewaktu-waktu kehilangan dukungan pendanaan tanpa dapat diprediksi sebelumnya. Atas dasar tersebut, Pengguna wajib membaca dan menerima realitas operasional berikut tanpa terkecuali:
 
- **Fasilitas "As-Is" dan Infrastruktur Terbatas:** Sistem ini diselenggarakan mutlak "sebagaimana adanya" (*as-is*) dan "sebagaimana tersedia" (*as-available*), tanpa jaminan dalam bentuk apa pun, baik tersurat maupun tersirat. Infrastruktur *server* Kami mungkin memiliki kelemahan (*insecure*) dan ketiadaan arsitektur pelindung berstandar industri atau kelas *enterprise*. Kami **sama sekali tidak memberikan jaminan keamanan 100%** bahwa sistem ini kebal terhadap intrusi peretas.
- **Tanpa Jaminan Waktu Aktif (*No SLA*):** Kami tidak menjanjikan persentase *uptime* tertentu. Pemeliharaan darurat, migrasi server, atau kegagalan pihak ketiga penyedia hosting dapat menyebabkan Layanan tidak dapat diakses kapan pun tanpa pemberitahuan sebelumnya.
- **Ketergantungan pada Pihak Ketiga:** Layanan bergantung pada infrastruktur pihak ketiga (misalnya penyedia hosting, *content delivery network*, atau penyedia domain). Kami tidak bertanggung jawab atas gangguan, kebocoran, atau penghentian layanan yang bersumber dari kegagalan pihak ketiga tersebut.
- **Kelangsungan Proyek Tidak Terjamin:** Sebagai proyek independen yang bergantung pada kapasitas sukarela dan pendanaan yang tidak selalu pasti, Kami berhak menghentikan, menangguhkan, mengalihkan, atau membekukan pengembangan dan/atau operasional Layanan sewaktu-waktu — termasuk secara permanen — apabila dukungan sumber daya (finansial, personel, maupun infrastruktur) tidak lagi mencukupi. Kami akan berupaya memberikan pemberitahuan sewajarnya apabila memungkinkan, namun ketiadaan pemberitahuan tersebut bukan merupakan pelanggaran ToS ini.
- **Pelepasan Liabilitas Total:** Pengembang **secara mutlak dan penuh dibebaskan dari segala bentuk tuntutan ganti rugi, kewajiban finansial, maupun jeratan hukum** apabila terjadi insiden kebocoran basis data (*data breach*), pencurian kredensial, peretasan sesi, manipulasi akun, kehilangan akses ke Aplikasi Mitra, kerugian bisnis atau akademis, maupun kegagalan teknis server dalam bentuk apa pun yang menyebabkan kerugian pada pihak mana pun, baik langsung maupun tidak langsung.
- **Risiko Hilangnya Data Akses:** Kami menyelenggarakan pencadangan (*backup*) kredensial pada interval yang teramat sangat jarang, mengingat keterbatasan kapasitas penyimpanan dan personel pengelola. Bencana perangkat keras, kesalahan manusia, atau insiden teknis lain dapat mengakibatkan korupsi basis data kredensial secara permanen yang tidak dapat Kami pulihkan, sehingga seluruh histori otentikasi — termasuk data status kehadiran — bisa saja lenyap tanpa dapat dikembalikan.
- **Batasan Dukungan Teknis:** Kami berupaya sebaik mungkin merespons keluhan atau laporan gangguan, namun tidak menjanjikan waktu respons (*response time*) maupun penyelesaian tertentu, mengingat pengelolaan Layanan dilakukan secara sukarela di luar kapasitas kerja penuh waktu.
### 7. Tanggung Jawab Pengamanan Akun oleh Pengguna
 
Mengingat limitasi jaminan keamanan Kami di atas, lapis pengamanan pertama diserahkan secara penuh ke tangan Anda:
 
- **Kewajiban Kerahasiaan:** Pengguna memikul seluruh tanggung jawab untuk menyusun kata sandi yang amat kompleks dan merawat kerahasiaannya dengan ekstra hati-hati, termasuk tidak membagikan kredensial kepada pihak lain dalam bentuk apa pun.
- **Perangkat Bersama atau Hilang:** Apabila Pengguna mengakses Layanan melalui perangkat bersama (*shared device*) atau perangkat tersebut hilang/dicuri, Pengguna wajib segera mengganti kata sandi dan/atau mengakhiri seluruh sesi aktif secara mandiri. Kami tidak bertanggung jawab atas akses tidak sah yang terjadi akibat kelalaian menjaga perangkat fisik.
- **Beban Aktivitas Akun:** Segala bentuk interaksi, tindakan ilegal, pelanggaran kode etik, maupun kelalaian yang timbul karena penggunaan kredensial Anda — termasuk yang dilakukan oleh pihak lain yang memperoleh akses melalui kelalaian Anda — sepenuhnya merupakan konsekuensi dan tanggung jawab yuridis Pengguna itu sendiri.
- **Kelayakan Pengguna:** Layanan ditujukan bagi pengguna yang memiliki afiliasi sah dengan institusi terkait dan/atau telah dianggap cukup umur untuk memberikan persetujuan secara mandiri atas penggunaan Layanan dan pengolahan datanya. Apabila Pengguna belum memenuhi kriteria tersebut, persetujuan orang tua/wali wajib diperoleh terlebih dahulu sebelum menggunakan Layanan.
- **Larangan Eksploitasi:** Pengguna dilarang keras melakukan pengujian stres (*stress testing*), merancang skrip serang, membanjiri antarmuka dengan *bot* otomatis, melakukan *scraping* data secara masif, membuat akun ganda/palsu untuk tujuan manipulasi, melakukan rekayasa balik (*reverse engineering*) terhadap mekanisme Token Akses, atau berusaha menerobos dinding otentikasi (*bypass*) SSO Kami dengan niat mendestruksi maupun mengeksploitasi celah keamanan.
- **Pelaporan Kerentanan:** Apabila Pengguna menemukan celah keamanan, Pengguna diharapkan melaporkannya secara bertanggung jawab kepada Kami sebelum mengeksploitasi, mempublikasikan, atau membagikannya kepada pihak lain.
### 8. Manajemen Sesi dan Token Akses
 
- Token Akses memiliki masa berlaku terbatas dan akan kedaluwarsa secara otomatis demi alasan keamanan. Pengguna mungkin diminta melakukan login ulang tanpa peringatan mendahului, terutama setelah periode tidak aktif yang lama.
- Kami berhak mencabut (*revoke*) Token Akses dan/atau memaksa Pengguna keluar dari seluruh sesi aktif (*forced logout*) di seluruh Ekosistem apabila terdeteksi aktivitas mencurigakan, tanpa perlu pemberitahuan terlebih dahulu.
- Kami tidak menjamin dukungan sesi berjumlah tidak terbatas (*unlimited concurrent sessions*) dan berhak membatasi jumlah perangkat yang dapat login secara bersamaan pada satu akun.
- Kegagalan sinkronisasi sesi antar-Aplikasi Mitra (misalnya status login yang tidak konsisten) merupakan risiko teknis yang melekat pada arsitektur terdistribusi dan bukan merupakan cacat yang dapat dituntut.
### 9. Interoperabilitas Ekosistem Aplikasi (Karya, SASCA, dan Layanan Mendatang)
 
- Data otentikasi dan status kehadiran yang dikelola Layanan ini dapat dibagikan secara terbatas kepada Aplikasi Mitra dalam Ekosistem semata-mata untuk keperluan validasi identitas dan sinkronisasi status pengguna.
- Setiap Aplikasi Mitra dapat memiliki Ketentuan Layanan dan Kebijakan Privasi tersendiri yang mengatur pengolahan data spesifik pada aplikasi tersebut di luar cakupan otentikasi. Pengguna wajib membaca ketentuan masing-masing Aplikasi Mitra secara terpisah.
- Penambahan Aplikasi Mitra baru ke dalam Ekosistem di masa mendatang akan tunduk pada ToS ini secara otomatis untuk fungsi otentikasi, kecuali dinyatakan lain secara tertulis.
- Penghentian akses pada satu Aplikasi Mitra (misalnya karena pelanggaran ToS aplikasi tersebut) tidak serta-merta menghentikan akses Pengguna terhadap Aplikasi Mitra lain, kecuali pelanggaran tersebut juga melanggar ToS Layanan SSO ini secara langsung.
### 10. Retensi, Ekspor, dan Penghapusan Data
 
- Data kredensial dan telemetri disimpan selama akun Pengguna aktif dan selama diperlukan untuk tujuan sebagaimana dijelaskan pada Pasal 4.
- Pengguna dapat mengajukan permintaan penghapusan akun dan data terkait melalui kanal kontak yang Kami sediakan. Kami akan berupaya memenuhi permintaan tersebut dengan upaya terbaik (*best effort*), namun tidak dapat menjamin waktu penyelesaian tertentu mengingat keterbatasan infrastruktur pencadangan.
- Sebagian data (misalnya log keamanan) dapat tetap disimpan dalam bentuk tersamar (*masked*) untuk keperluan investigasi keamanan atau kepatuhan hukum, bahkan setelah permintaan penghapusan dipenuhi.
- Kami tidak menjamin ketersediaan fitur ekspor data secara mandiri oleh Pengguna, namun akan mempertimbangkan permintaan semacam itu berdasarkan kelayakan teknis.
### 11. Keadaan Kahar (*Force Majeure*) dan Gangguan Layanan
 
Kami dibebaskan dari tanggung jawab atas keterlambatan atau kegagalan pemenuhan kewajiban dalam ToS ini apabila disebabkan oleh keadaan di luar kendali wajar Kami, termasuk namun tidak terbatas pada: bencana alam, pemadaman listrik atau jaringan berskala luas, kegagalan penyedia hosting/cloud pihak ketiga, serangan siber berskala nasional, wabah penyakit, kerusuhan sosial, perubahan regulasi mendadak, maupun kegagalan infrastruktur internet nasional/internasional.
 
### 12. Penghentian atau Penangguhan Layanan
 
- **Oleh Pengembang:** Kami berhak menangguhkan atau menghentikan akses akun Pengguna sewaktu-waktu, dengan atau tanpa pemberitahuan, apabila terdapat indikasi pelanggaran ToS, aktivitas mencurigakan, atau sebagai bagian dari penghentian proyek secara keseluruhan sebagaimana dijelaskan pada Pasal 6.
- **Oleh Pengguna:** Pengguna dapat mengajukan penutupan akun kapan pun melalui kanal kontak resmi. Penutupan akun akan berdampak pada hilangnya akses ke seluruh Aplikasi Mitra dalam Ekosistem.
- Penghentian Layanan secara keseluruhan (misalnya karena proyek tidak lagi memiliki dukungan pendanaan atau sumber daya pengelola) dapat dilakukan sewaktu-waktu atas kebijakan Pengembang, dan Pengguna memahami bahwa hal ini merupakan risiko yang melekat pada sifat independen dan nirlaba Layanan ini.
### 13. Perubahan Ketentuan Layanan
 
Kami berhak mengubah, menambah, atau mencabut sebagian maupun keseluruhan isi ToS ini sewaktu-waktu atas kebijakan sepihak Kami, khususnya untuk menyesuaikan dengan perubahan teknis, hukum, atau kapasitas operasional. Perubahan akan diinformasikan melalui pembaruan tanggal pada dokumen ini dan/atau pemberitahuan dalam antarmuka Layanan sepanjang memungkinkan secara teknis. Penggunaan Layanan yang berkelanjutan setelah perubahan berlaku dianggap sebagai persetujuan Pengguna terhadap ToS versi terbaru.
 
### 14. Penyelesaian Perselisihan
 
Setiap perselisihan, keberatan, atau kesalahpahaman yang timbul sehubungan dengan ToS ini akan diupayakan penyelesaiannya terlebih dahulu melalui musyawarah untuk mufakat antara Pengguna dan Pengembang, dengan dilandasi itikad baik dari kedua belah pihak.
 
### 15. Ketentuan Lain-lain
 
- **Keterpisahan (*Severability*):** Apabila salah satu ketentuan dalam ToS ini dinyatakan tidak sah atau tidak dapat diberlakukan oleh otoritas yang berwenang, ketentuan lain dalam dokumen ini tetap berlaku penuh.
- **Keseluruhan Perjanjian:** ToS ini, bersama Kebijakan Privasi (apabila ada dokumen terpisah), merupakan keseluruhan kesepakatan antara Pengguna dan Pengembang terkait penggunaan Layanan SSO ini.
- **Bahasa:** Dokumen ini disusun dalam Bahasa Indonesia sebagai bahasa resmi yang mengikat secara hukum.
- **Kontak:** Pertanyaan, keluhan, atau permintaan terkait data dapat disampaikan melalui kanal kontak resmi yang Kami sediakan pada masing-masing Aplikasi Mitra.

### Transparansi Pengembangan Berbantuan AI

Kami menginformasikan bahwa sebagian kode sumber (source code) dari Aplikasi ini dihasilkan, dioptimalkan, atau dianalisis menggunakan teknologi kecerdasan buatan berbasis awan (*cloud-based AI*). Dengan demikian, struktur kode dan logika sistem (yang berpotensi menyertakan interaksi data) dapat dibaca, diproses, atau disimpan secara sementara oleh pihak ketiga selaku penyedia layanan AI. Pengguna menyadari dan menerima kondisi ini sebagai bagian dari proses pemeliharaan dan pengembangan Aplikasi yang berkelanjutan.

---
### Pernyataan Persetujuan
 
Dengan memasukkan kredensial dan menekan tombol persetujuan pada layar ini, Anda bersepakat atas rancangan privasi di atas, mencerna seluruh risiko keterbatasan infrastruktur dan kelemahan teknis yang dideskripsikan, memahami sifat independen dan nirlaba dari proyek ini beserta kemungkinan penghentiannya sewaktu-waktu, serta **melepaskan segala hak untuk menuntut pertanggungjawaban dalam bentuk apa pun** dari Pengembang atas segala insiden teknis, kehilangan data, maupun gangguan layanan di masa mendatang.