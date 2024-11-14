
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titleText = "Aku Mau Pertemanan Kita diupgrade ";
        const linkHTML = '<a href="https://haikaldev27.github.io/OnlyHer/Pages/Question/YesOrNo.html" style="text-decoration: underline;">Boleh?</a>';
        const titleElement = document.getElementById('title');
        let index = 0;

        // Menampilkan teks karakter per karakter, dan menambahkan link HTML setelahnya
        function appendTitle() {
          if (index < titleText.length) {
            // Menambahkan karakter satu per satu
            titleElement.innerHTML += titleText[index];
            index++;
            setTimeout(appendTitle, 100); // 100ms delay
          } else {
            // Setelah teks selesai, tambahkan elemen HTML
            titleElement.innerHTML += linkHTML;
          }
        }

        appendTitle();

        clearTimeout(c);
      }, 1000);
    };