'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;

for (let i = 0; i < num.length; i++) {
   sum += +num[i] * 2 ** (num.length - 1 - i);
 }
 return sum;
} 

function DecimalABinario(num) {
  // tu codigo aca
  var binario = '';
  while(num >= 1){
    binario = num % 2 + binario;
    num = Math.floor(num / 2);
  }
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}