
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Aku Mau Pertemanan Kita diupgrade <a href="https://haikaldev27.github.io/OnlyHer/Pages/Question/YesOrNo.html" style="text-decoration: underline;">Boleh?</a>').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};