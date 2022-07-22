///////////////
/*
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); //
  var f = function(a, b, c) {
    b = a; //b=8
    console.log(b); //8
    b = c; b=10
    var x = 5;
  }
  f(a,b,c); //8, 9, 10
  console.log(b);
}
c(8,9,10);
console.log(b);//10
console.log(x);//1

//////////////
/*
console.log(bar);// undefined //posible error
console.log(baz);// undefined // posible error
foo(); //'hola!'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

Hoisting 
var bar;
function foo(){...}
*/

/*
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // franco
*/
/*var instructor = "Tony";
console.log(instructor);//Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //Franco
   }
})();
console.log(instructor); //Tony
*/

/*
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //the flash
    console.log(pm);//reverse flash
}
console.log(instructor); //the flash
console.log(pm); //franco
*/

/* 
6 / "3" //2
"2" * "3" // 6 
4 + 5 + "px"// 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinito
{}[0] // undefined o [0]
parseInt("09")// 9
5 && 2 // 2
2 && 5 // 5 
5 || 0 //5
0 || 5 //5-0
[3]+[3]-[10] // 23
3>2>1 // false
[] == ![] //true
*/
/*
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
*/
/*
function printing() {
  console.log(1);
  setTimeout(function() { console.log(2); }, 1000);
  setTimeout(function() { console.log(3); }, 0);
  console.log(4);
}

printing();
*/
/*
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;  // undefined
}

getFood(false); //
*/