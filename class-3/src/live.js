{
let i = 40;

function d(){
  i = 0; 
}

function eval(){
  return i < 20
}

const x = 32;
for(d(); eval() ; i += 1){
  console.log( (i%2===0) ? ((i%5) ? String(i) : "buzz") : ((i%5===0) ? "fizz" : "Fizzbuzz") )
  
}

// let i = 0;
// while (i < 20){
//   i += 4;
// }

}
