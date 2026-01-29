"use strict";

// function process() {
//     var c;
//     if (true) {
//         console.log("processing...");

//         let v = function fnInsideBlock() {
//             console.log("I am inside a block");
//         };
//         c = v;
//     }

//     c();
// }
// process(); // errorgit remote show origin


function sort(nums) {
    if (nums === null || nums.length < 1) {
        return
    }

    let res = []
    // let result = []
    for (let i = 0; i < nums.length; i++) {
        nums.forEach((element, index) => {
            if ([...String(element)].length == i) {
                res.push(element)
            }
        });
        // for (let j = 0; j < res.length; j++) {
        //     res.forEach((element, index) => {
        //         if (element < res[index + j]) {
        //             result.pop(element)
        //         }
        //     });
        // }
    }
    return res
}

// sort(null)
// sort([])

let nnn = [32, 1, 19, 344, 70, 22, 13, 8, 4, 7, 44, 151, 11, 0, 9999]
console.log(sort(nnn));