//BigInt("849384983294839248394283")

console.log(Math.pow(3, 3));
console.log(2 ** 10);

const height = 180;
const weight = 90;
const centiHeight = height / 100;
let biman = weight / (centiHeight * centiHeight);
biman = Math.round(biman * 10) / 10;
//console.log("π ~ file: biman.js:8 ~ biman", biman);
if (biman <= 18.5) {
  console.log("μ μ²΄μ€");
} else if (biman > 22.9) {
  console.log("λΉλ§");
} else {
  console.log("μ μ");
}
