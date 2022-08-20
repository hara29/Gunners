let chara = document.getElementById('chara');
let kerupuk = document.getElementById('kerupuk');
let tombolMulai = document.getElementById("tombol");
let tombolLompat = document.getElementById("jump");
let timer = document.getElementById("timer");
let papanSkor = document.getElementById("skor");
let waktu = 30;
let skor = 0;

function animasiLompat(){
    if (chara.classList != "animasiLompat"){
        chara.classList.add("animasiLompat");
    }
    setTimeout(function(){
        chara.classList.remove("animasiLompat");
    },500);
}

function animasiLinear(){
    if (kerupuk.style.animationPlayState == 'paused'){
        kerupuk.style.animationPlayState = 'running';
    }
}

function poin(){
    let charaTop = parseInt(window.getComputedStyle(chara).getPropertyValue("top"));
    let kerupukLeft = parseInt(window.getComputedStyle(kerupuk).getPropertyValue("left"));
    if (kerupukLeft > 192 && kerupukLeft < 307.5 && charaTop <= 90){
        skor++;
        papanSkor.innerHTML = "Skor: " +skor;
    }
}

function sisaWaktu(){
    timer.innerHTML = "Sisa waktu " +waktu + " detik";
    setTimeout(()=>{
        if(waktu > 0){
            waktu--;
            sisaWaktu();
        }else{
            kerupuk.style.animation = "none"
            timer.innerHTML = "Waktu Habis";
        }
    }, 1000)
}

window.addEventListener("load",()=>{
    kerupuk.style.animationPlayState = 'paused';
});

function mulai_game(){ 
    poin(); 
    animasiLinear();
    animasiLompat();
}
window.addEventListener("click",mulai_game);

if (mulai_game) {
    sisaWaktu();
}