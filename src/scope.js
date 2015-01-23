function example() {
    "use strict";
    try{
    console.log(msg);
    let msg = "hello world";
    }catch(e){
    console.log(e);
    }
}
example();

function example2() {
    "use strict";
    for (let i = 1; i < 5; i++) {
            /*jshint -W083 */
        setTimeout(function () {
            console.log("Iteration"+i);
        }, 10);
    }
    
}
example2();
