let clickCount = 0;

function moveButton() {
    clickCount++;
    if (clickCount < 15) {
        const button = document.getElementById('noButton');
        button.style.position = 'absolute';
        button.style.top = Math.random() * 300 + 'px';
        button.style.left = Math.random() * 300 + 'px';
    } else {
        alert("Yaudah deh, aku juga gabisa maksa. Maaf udah ganggu kamu.");
        document.getElementById('formResponse').value = "No";
        document.getElementById('submitForm').submit();
    }
}

function submitYes() {
    document.getElementById('formResponse').value = "Yes";
    document.getElementById('submitForm').submit();
}

window.onload = function() {
    var audio = document.getElementById('backgroundMusic');
    audio.play();
}