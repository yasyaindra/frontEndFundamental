// const buah = ["apel","mangga","jeruk","semangka"]

// const [, , ,segar] = buah

// console.log(segar)

// const hewan = ["burung","jangkrik","buaya","harimau","lintah"]
// const bunga = ["teratai","mawar","melati","sakura"]
// // const makanan = ["rawon"];

// // let makananSaya = "nasi padang";
// // let makananKamu = "gado gado";

// //nilai default
// // [makananSaya, makananKamu="makanan halal"] = makanan;
// semuaMacam = [...hewan,...bunga]
// console.log(semuaMacam)

// var a = 1;
// var b = 2;
// // var temp

// console.log("sebelum swap");
// console.log(`Nilai a : ${a}`);
// console.log(`Nilai b : ${b}`);

// // temp = a;
// // a = b;
// // b = temp;

// [a,b] = [b,a];

// console.log("setelah swap");
// console.log(`Nilai a : ${a}`);
// console.log(`Nilai b : ${b}`);

//Rest Parameter
// var numbers = [1,2,3,4,5]
// function sum(...numbers) {
//     var result = 0;
//     for(number of numbers) {
//         result += number
//     }
//     return result;
// }

// console.log(sum(...numbers));

const refrigerator = ["Samsung", 50, 2, "milk", "cheese", "egg", "butter"];

const [kulkas, ukuran, jumlah,...items] = refrigerator;
console.log(ukuran)
console.log(...items)