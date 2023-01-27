// //const candidateNum = [1,2,3,5,8,9,10,11,...,45]
// const animals = ["rabbit", "tiger", "lion"];
// const candidateNum = [];
// const lotto = [];
// for (let i = 1; i < 46; i++) {
//   candidateNum.push(i);
// }
// for (let i = 0; i < 6; i++) {
//   //prettier-ignore
//   const selectedNum = 
//   candidateNum.splice(parseInt(Math.random() * candidateNum.length), 1);
//   lotto.push(selectedNum[0]);
// }
// lotto.sort(function (a, b) {
//   //return a - b;
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// console.log(lotto);



const japanClass = [
  {name: "김남현", age: 20, iq: 80, ismarried: false, address: "서울"},
  {name: "김지은", age: 20, iq: 120, ismarried: false, address: "당산"},
  {name: "백명현", age: 25, iq: 110, ismarried: true, address: "신림"},
]

for(let i=0;i<3;i++) {
  console.log(japanClass[i].name,japanClass[i].age);
}
japanClass.forEach(function(item,idx){
  console.log(idx, ":",item.name, "===", item.age, "===", item.iq, "===", item.ismarried, "===", item.address);
});
