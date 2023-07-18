let x = prompt("Absis oxunun qiymeti :");
let y = prompt("Ordinat oxunun qiymeti :");

if (x > 0 && y > 0) {
  console.log("bu noqte 1 de yerlesir");
} else if (x < 0 && y > 0) {
  console.log("bu noqte 2 de yerlesir");
} else if (x < 0 && y < 0) {
  console.log("bu noqte 3 de yerlesir");
} else if (x > 0 && y < 0) {
  console.log("bu noqte 4 de yerlesir");
} else if (y == 0) {
  console.log("absis oxu uzerindedir");
} else if (x == 0) {
  console.log("ordinat oxu uzerindedir");
}
