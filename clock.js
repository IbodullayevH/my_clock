//////////////// declair /////////////////////
const sec = document.getElementById(`sec`);
const min = document.getElementById(`min`);
const s = document.getElementById(`clock`);
const main = document.querySelector(`main`);
const txtColor = document.querySelector(`.txt`);
const txtColor1 = document.querySelector(`.txt1`);
const txtColor2 = document.querySelector(`.txt2`);
const note = document.querySelector(`#note`);

///////// Style ////////////
let d = 1;
let rgbA = Math.floor(Math.random() * 255);
let rgbB = Math.floor(Math.random() * 255);
let rgbC = Math.floor(Math.random() * 255);

txtColor.style.textShadow = `0px 0 50px rgb(${rgbA}, ${rgbB}, ${rgbC})`;
txtColor1.style.textShadow = `0px 0 50px rgb(${rgbA}, ${rgbB}, ${rgbC})`;
txtColor2.style.textShadow = `0px 0 50px rgb(${rgbA}, ${rgbB}, ${rgbC})`;

////////////// logica //////////////
const timeI = setInterval(() => {
  ////////////// sec
  if (new Date().getSeconds() < 10) {
    sec.innerText = `0` + new Date().getSeconds();
    txtColor2.style.textShadow = `0px 0 50px rgb(${rgbA}, ${rgbB}, ${rgbC})`;
  } else {
    sec.innerText = new Date().getSeconds();
    txtColor2.style.textShadow = `0px 0 50px rgb(${rgbA}, ${rgbB}, ${rgbC})`;
  }
  ////////////
  if (new Date().getSeconds() == 0) {
    if (d < 7) {
      d++;
      main.style.transition = `all .8s`;
      main.style.backgroundImage = `url("./images/k${d}.jpg")`;     
      console.log(`url("./images/k${d}.jpg")`);
       
    } else {
      d -= 7;
    }
  }

  ////////////////min
  if (new Date().getMinutes() < 10) {
    min.innerText = `0` + new Date().getMinutes();
  } else {
    min.innerText = new Date().getMinutes();
  }

  ///////////// soat
  if (new Date().getHours() < 10) {
    s.innerText = `0` + new Date().getHours();
  } else {
    s.innerText = new Date().getHours();
  }
}, 1000);

////////////////////////////////////////

let noteI = setInterval(() => {
  // note.style
  note.style.transition = `all 3s`;
  note.style.width = `0px`;
  note.style.top = `-50vh`;
}, 4000);

setTimeout(() => {
  clearInterval(noteI);
}, 10000);
