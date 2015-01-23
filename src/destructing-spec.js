var product={
name:"Product1",
description:"......",
vat:0.02,
price:120,
attributes:{
    width:100,
    height:200
}
};
function size(product){
    
let {width,height}=product.attributes;
return width * height;
}
describe("Product Attributes ", function () {

    it("Find Size", function () {
        var estimatedValue=100*200;
        expect(size(product)).toBe(estimatedValue);
    });
});