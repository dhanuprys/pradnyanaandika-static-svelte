export interface FAQ {
	question: string;
	answer: string;
}

export const faqConfig = {
	faqs: [
		{
			question: 'Apakah konsultasi penelitian bisa dilakukan secara daring?',
			answer:
				'Ya, seluruh sesi bimbingan dan konsultasi dapat dijadwalkan secara daring melalui Zoom atau Google Meet.'
		},
		{
			question: 'Bagaimana cara mengundang Andika sebagai narasumber/speker webinar?',
			answer:
				'Anda dapat mengisi formulir kontak di samping dengan memilih kategori "Undangan Narasumber / Speaker" dan mencantumkan detail acara.'
		},
		{
			question: 'Apakah modul dan e-book yang dibeli di store bisa langsung diakses?',
			answer:
				'Ya, seluruh modul, e-book, dan template digital di Academy Store dapat diunduh secara langsung setelah transaksi berhasil.'
		},
		{
			question: 'Berapa lama waktu respon untuk balasan email atau pesan?',
			answer:
				'Tim kami berusaha membalas seluruh pesan masuk dalam waktu 1x24 jam kerja (Senin - Jumat).'
		}
	] as FAQ[]
};
