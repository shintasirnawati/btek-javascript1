//Lesson1 Javascript
//20 Method Bawaan Javascript

// 1. 
// Method   : Array.push()
// Kegunaan : untuk menambahkan elemen array pada akhir dari array
// Contoh Penggunaan : 
let a = [1,2,3,4,5,6,7]
a.push("mangga")
console.log(a)
// Expected Output  : [1,2,3,4,5,6,7,8,"mangga"]

// 2. 
// Method   : Array.slice()
// Kegunaan : untuk memotong array menjadi array baru, atau menjadi sub-array dari array asalnya. method ini membutuhkan 2 buah argumen yang berisi posisi index awal dan akhir pemotongan
// Contoh Penggunaan : 
let data1= [1,2,3,4,5,6,7]
let dataBaru= data.slice(2,5)
console.log(dataBaru)
// Expected Output  : [3,4,5]

// 3. 
// Method   : Array.pop()
// Kegunaan : untuk menghapus elemen terakhir dari array
// Contoh Penggunaan : 
let b = [1,2,3,4,5,6,7]
b.pop()
console.log(b)
// Expected Output  : [1,2,3,4,5,6]

// 4. 
// Method   : Array.shift()
// Kegunaan : untuk menghapus elemen paling awal array
// Contoh Penggunaan : 
let e = [1,2,3,4,5,6,7]
e.shift()
console.log(e)
// Expected Output  : [2,3,4,5,6,7]

// 5. 
// Method   : Array.unshift()
// Kegunaan : untuk menambahkan elemen baru di awal
// Contoh Penggunaan : 
let g = [1,2,3,4,5,6,7]
g.unshift()
console.log(g)
// Expected Output  : [0,1,2,3,4,5,6,8]

// 6. 
// Method   : Array.join()
// Kegunaan : untuk menggabungkan elemen array menjadi sebuah string
// Contoh Penggunaan : 
let data4 = [1,2,3,4,5,6,7]
console.log(data4.join("-"))
// Expected Output  : [1-2-3-4-5-6-7]



// 7. 
// Method   : Array.sort()
// Kegunaan : untuk mengurutkan elemen pada array baik secara ascending atan descending
// Contoh Penggunaan : 
let data = [1,2,3,4,5,6,7]
let data2 = ["a", "b", "c", "d", "e", "f", "g"]
data.sort((a,b)=> a > b ? 1: -1)
console.log(data)
// Expected Output  :[1, 2, 3, 4, 5, 6, 7]


// 8. 
// Method   : Array.splice()
// Kegunaan : untuk memotong array, menambahkan elemen array bahkan melakukan keduanya sekaligua
// Contoh Penggunaan : 
var arr1 = [1,2,3,4,"a","b","c","d"];
console.log(arr1.toString());      // hasil 1,2,3,4,a,b,c,d 
var arr2 = arr1.splice(4)   
  
console.log(arr1.toString());     // hasil: 1,2,3,4
console.log(arr2.toString());      //hasil: a,b.c.d
// Expected Output  :

// 9. 
// Method   : Array.filter()
// Kegunaan : untuk membuat sebuah array baru dengan memperhatikan kondisi tertentu pada setiap elemen dari array yang sudah ada
const angka1 = [1,2,3,4,5,6,7,8];
const filteredArray = angka1.filter(item => item % 2 === 0);
console.log(filteredArray)
// Expected Output  :[2, 4, 6, 8]

// 10. 
// Method   : Array.map()
// Kegunaan : untuk membuat array baru sambil mengecek/ melakukan operasi terhadap setiap elemen array
const angka2= [1,2,3,4,5,6,7,8];
const mapedArray = angka2.map(item => item % 2 === 0);
console.log(mapedArray);
// Expected Output  :[false, true, false, true, false, tr...]

// 11. 
// Method   : Array.includes()
// Kegunaan : untuk mengecek apakah pada elemen array memenuhi suatu kondisi atau tidak
const angka3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const something = angka3.includes(2);
const any = angka3.includes(10);
console.log(something);
// Expected Output  :true



// 12. 
// Method   : Array.every()
// Kegunaan : untuk mengecek apakah setiap elemen dalam array memenuhi kondisi
const angka7= [1, 2, 3, 4, 5, 6, 7, 8, 9]
const greaterFive = angka7.every(item => item > 4);
console.log(greaterFive);
// Expected Output  :false

// 13. 
// Method   : Array.reduce()
// Kegunaan : untuk mengecek apakah setiap elemen dalam array memenuhi kondisi
const J= [1, 2, 3, 4, 5, 6, 7, 8, 9]
const sum = J.reduce((total, value) => total + value, 0); 
console.log(sum)
// Expected Output  :45

// 14. 
// Method   : Array.of()
// Kegunaan : untuk membuat array dari setiap argumen yang di passing
const angka = Array.of(1, 2, 3, 4, 5, 6);
console.log(angka);
// Expected Output  :[1, 2, 3, 4, 5, 6]

// 15.
// Method   : length
// Kegunaan : Mengetahui jumlah karakter yang dituliskan dalam string
// Contoh Kegunaan : 
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let panjang = txt.length
console.log(panjang)
// Expected Output : 26

// 16.
// Method   : toString()
// Kegunaan : Mengubah data array ke dalam tipe data string.
// Contoh Kegunaan : 
const k = [1,2,3,4,5]
console.log(k) // Output [1,2,3,4,5]
console.log(k.toString())
// Expected Output  : 1,2,3,4,5

// 17. 
// Method   : getFullYear()
// Kegunaan : Mengambil tahun hari ini
// Contoh Kegunaan  : 
const m = new Date()
console.log(m.getFullYear())
// Expected Output  : 2022

// 18.
// Method   : toUpperCase()
// Kegunaan : Mengubah string menjadi huruf kapital semua
// Contoh Kegunaan  : 
var l = "Ayo Shinta Semangat"
console.log(l.toUpperCase())
// Expected Output : AYO SHINTA SEMANGAT

// 19.
// Method   : toLowerCase()
// Kegunaan : Mengubah string menjadi huruf kecil semua
// Contoh Kegunaan : 
var n = "MaRi BeRmain DeNgAn sAYA"
console.log(n.toLowerCase())
// Expected Output : mari bermain dengan saya



// 20. 
// Method   : Array.concat()
// Kegunaan : untuk menyambungkan array
// Contoh Penggunaan : 
var arr1 = [1,2,3,4,"a","b","c","d"];
console.log(arr1.toString());
// Expected Output  : 1,2,3,4,a,b,c,d