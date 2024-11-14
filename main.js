//for envelope mechanism

let button = document.querySelector('.button');
let letter = document.getElementById('letter');
let main = document.getElementById('main');

button.onclick = function(){
    main.classList.toggle("active");
    letter.removeAttribute("hidden");
}

const envelope = document.querySelector('.envelope');
const popup = document.querySelector('.popup');

envelope.onclick = function() {
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

//for envelope content
const title = document.querySelector('.envelope_content')
const text = 'Hey, aku mau ngomong sesuatu nih, straight to the point aja. Aku suka sama kamu, and yeah, I guess it's pretty obvious. Ga ada orang yang tiba-tiba minta foto kamu buat diedit atau ngajak foto bareng kalo ga suka, kan? Haha.

Aku tau, kita beda agama. Aku Islam, kamu Katolik, and I get it, itu ga gampang. Tapi aku mikir, kenapa kita ga coba jalanin dulu aja? Liat ke depannya gimana, kita sama-sama setia sama kepercayaan masing-masing, atau gimana nanti. Tapi yang penting, kita bisa bareng sekarang.

Kamu mungkin mikir aku suka sama kamu cuma karena kamu cantik, lucu, dan imut? Ya, itu salah satu alasannya sih. Tapi honestly, sejak awal aku udah ngeliat kamu bukan cuma dari penampilan. Dari semenjak MPLS, aku udah mikir, ‘damn, she’s so pretty’ (yes aku suka sama kamu dari awal kita sekolah), tapi seiring waktu aku makin suka karena kamu smart, rajin, and you're super religious. I admire that, even though our beliefs are different. But, aku suka aja gitu kalo ada orang yang taat banget sama ajaran agamanya.

At the end of the day, terserah kamu mau gimana sama perasaanku, I just hope kita ga jadi awkward gara-gara ini. Makasihh udah nyempetin baca ya cantikk.'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.envelope_content span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});