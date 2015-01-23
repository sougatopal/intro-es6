function max(a,...b){
var v=a;

for(let i of b){
v= v+i;
}
    return v;
}

describe("Rest", function () {

    it("Single Arg", function () {
         expect(max(3)).toBe(3);
    });
    it("Two Args", function () {
         expect(max(3,2)).toBe(5);
    });
    it("Mul Args", function () {
         expect(max(3,2,5)).toBe(10);
    });  
    it("Mul Args with Spread", function () {
        let v=[1,2,3];
         expect(max(...v)).toBe(6);
    });  
});



function welcome(msg="hello world"){
return msg;
}
describe("Default Paramters", function () {

    it("default msg", function () {
         expect(welcome()).toBe("hello world");
    });
    it("Custom Mesg", function () {
         expect(welcome("Welcome to JSChannel")).toBe("Welcome to JSChannel");
    });
});
