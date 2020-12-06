var obj = { name: "pencil", price: 10, items: [] };
var x = 15;
function change(product, newPrice) {
  product.price = newPrice;
  product.items.push("Clothes");
  //changes variable's value
  newPrice = 9;
}
// change(obj, x);
// console.log(obj);
// console.log(x);

// Hoisting calls a function before declaration and it works!
work();

function work(){
    console.log("it works");
}