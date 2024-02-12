const nilai = 10;

// if ( nilai === 1) return console.log("nilai is equal one");
// else return console.log("nilai is not one");

switch (nilai) {
  case 1:
  case 2:
  case 3:
    console.log("E");
    break;
  case 4:
  case 5:
    console.log("D");
    break;
  case 6:
    console.log("C");
    break;
  case 7:
  case 8:
    console.log("B");
    break;
  case 9:
  case 10:
    console.log("A");
    break;
  default:
    console.log("masukan nilai 1-10");
    break;
}
