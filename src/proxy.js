// Currently working on firefox
var handler ={
get:function (target,name){
return 37;
}
};
var p = new Proxy({},handler);
console.log(p.a);
console.log(p.b);