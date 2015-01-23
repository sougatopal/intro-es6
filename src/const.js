function Product(){
}
Product.prototype.vat=0.02;
Product.prototype.priceWithVat=function(){
return this.price * (1+this.vat)
}
var p = new Product();
p.name = "Product1"
p.price = 100;
console.log(p.priceWithVat());
var p2 = new Product();
p2.name = "Product1"
p2.vat = 0.3;
p2.price = 100;
console.log(p2.priceWithVat());

