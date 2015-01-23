function example() {
    "use strict";
    console.log(msg);
    /*jshint -W003 */
    var msg = "hello world";
}
example();

function example2() {
     "use strict";
    for (var i = 1; i < 5; i++) {
        /*jshint -W083 */
        var tempfn = (function(j){
            return function(){
            console.log("Iteration"+j);
            };
        })(i);
        setTimeout(tempfn, 10);
    }
    console.log("Last"+i);
}
example2();
