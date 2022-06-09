const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');


let tanahSebelumnya;
let selesai;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus(tanah) {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(300, 1000);
    tRandom.classList.add('muncul');
    setTimeout(() => {
        tRandom.classList.remove('muncul');
        munculkanTikus(tanah);
    }, wRandom);
}

function mulai() {
    munculkanTikus();
    setTimeout(() => {
        
    }, 10000);
}