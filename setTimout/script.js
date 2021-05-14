// setTimeout

// setTimeout(tampilkanPesan, 3000);

// function tampilkanPesan() {
//     console.log('Hello world');
// }


// const tes =setTimeout(function() {
//     console.log('Hello World');
// }, 7000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function() {
//     clearTimeout(tes);
//     console.log('selesai');
// });




// setInterval


// const tes = setInterval(function(){
//     console.log('yuhu');
// }, 2000);


// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', function() {
//     clearInterval(tes);
//     console.log('selesai');
// });

const tanggalTujuan = new Date('May 14, 2021 23:21:00').getTime();

const hitungMundur = setInterval(function() {
    const sekarang = new Date();
    const selisih = tanggalTujuan - sekarang;
    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / (1000));


    const teks = document.getElementById('teks');
    teks.innerHTML = 'waktu anda tinggal: ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik lagi!';

    if(selisih == 0) {
        clearTimeout(hitungMundur);
        teks.innerHTML = 'Waktu anda habis!'
    }

}, 1000);


