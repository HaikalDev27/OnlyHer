const title = document.querySelector('.title');

        // Fungsi untuk mengambil dan menampilkan isi file teks
        async function loadText() {
            try {
                // Mengambil isi file .txt
                const response = await fetch('./confession.txt');
                const text = await response.text();

                // Memproses isi teks untuk ditampilkan karakter per karakter
                for (let index = 0; index < text.length; index++) {
                    if (text[index] !== ' ') {
                        title.innerHTML += `<span>${text[index]}</span>`;
                    } else {
                        title.innerHTML += `<span style='margin-right: 20px;'></span>`;
                    }
                }
            } catch (error) {
                console.error('Gagal memuat isi file:', error);
            }
        }

        // Memanggil fungsi untuk memuat teks
        loadText();

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});