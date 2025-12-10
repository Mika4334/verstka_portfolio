"use strict";

function process() {
    var c;
    if (true) {
        console.log("processing...");

        let v = function fnInsideBlock() {
            console.log("I am inside a block");
        };
        c = v;
    }

    c();
}
process(); // errorgit remote show origin
