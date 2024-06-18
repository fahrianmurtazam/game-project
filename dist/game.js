function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

// menentukan rules
function getInfo(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return (comp == "orang") ? "MENANG!" : "KALAH!";

  if (player == "orang") return (comp == "semut") ? "MENANG!" : "KALAH!";

  if (player == "semut") return (comp == "gajah") ? "MENANG!" : "KALAH!";
}

  // menentukan rules cara 2
const DRAW = "draw"
const PWin = "player win"
const CWin = "computer win"
  function getHasil(comp, player) {
  let result = ''
  if(player == "gajah"){
    switch (comp) {
      case "orang":
        result = PWin
        break;
      
        case "gajah":
          result = DRAW
          break;
    
        case "semut":
          result = CWin
          break;
    }
  }

  if(player == "orang"){
    switch (comp) {
      case "semut":
        result = PWin
        break;

        case "orang":
          result = DRAW
          break;
    
        case "gajah":
          result = CWin
          break;
    }
  }

  if(player == "semut"){
    switch (comp) {
      case "gajah":
        result = PWin
        break;
      
        case "semut":
          result = DRAW
          break;

        case "orang":
          result = CWin
          break;
    }
  }
  scoring(result)
}

// hitung score
const scoreComputer = document.getElementById("scoreComputer")
const scorePlayer = document.getElementById("scorePlayer")

let initScoreComputer = 0
let initScorePlayer = 0

function scoring(result){
  setTimeout(function () {
    // alert(result)
    if(result=="player win"){
          initScorePlayer++
          scorePlayer.innerHTML ="Score: " + initScorePlayer
        if(initScorePlayer >= 3){
          for(let i = 0; i <= pilihan.length; i++){
            let notif = document.querySelector(".notif")
            notif.classList.remove("translate-y-[-1000px]")
          }
            playAgain(PWin)
      }
    }

    if(result=="computer win"){
          initScoreComputer++
          scoreComputer.innerHTML ="Score: " + initScoreComputer 
        if(initScoreComputer >= 3){
          for(let i = 0; i <= pilihan.length; i++){
            let notif = document.querySelector(".notif")
            notif.classList.remove("translate-y-[-1000px]")
          }
          playAgain(CWin) 
      }
    }
  }, 1100);
}

// animasi putar
function putar() {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);  
    const output = getInfo(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
      let info = document.querySelector(".info");
      info.innerHTML=output
    }, 1000);
  });
});

// fitur play again
function playAgain(winner){
  let notif = document.querySelector(".notif")
  const yes = document.querySelector(".yes")
  const no = document.querySelector(".no")
  const win = document.querySelector(".win")
  let info = document.querySelector(".info");

  win.innerHTML = "🎉 " + winner + " 🎉"  
  notif.addEventListener("click", function(event){
    if(event.target == yes){
      notif.classList.add("translate-y-[-1000px]")
      initScoreComputer = 0
      initScorePlayer = 0
      scorePlayer.innerHTML ="Score: " + initScorePlayer
      scoreComputer.innerHTML ="Score: " + initScoreComputer
      info.innerHTML = ""
      
    } else if(event.target == no){
      notif.classList.toggle("translate-y-[-1000px]")
      const card = document.querySelector(".card")
      card.classList.remove("scale-0")
      card.classList.add("scale-100")
    }
  })
}

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });


