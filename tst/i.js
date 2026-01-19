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


function rotate(matrix, direction) {
    let res = [], result = [], w = matrix[0].length, h = matrix.length, n = 0

    if (matrix.length && matrix.length === 1) {
        if (matrix[0][0].length === 1) {
            matrix[0].forEach((element, index) => {
                result.push(element[0])
            })
        } else {
            matrix[0].forEach((element) => {
                res.push(element)
                result.push(res)
                res = []
            });
        }

        if (direction === 'counter-clockwise') {
            return result.reverse()
        }
        if (direction === 'clockwise') {
            return result
        }
    }

    for (let i = matrix.length; i > -1; i--) {
        if (i === 0) {
            result.push(res)
            res = []
            i = matrix.length;
            n++;
            if (n === w) {
                if (direction === 'counter-clockwise') {
                    let newres = []
                    result.map((element) => newres.push(element.reverse()))
                    return result.reverse()
                }
                if (direction === 'clockwise') {
                    return result
                }
            }
        }

        for (let j = 0; j <= h; j++) {
            if (j === Math.abs(i - w)) {
                res.push(matrix[i - 1][j - Math.abs(i - w) + n]);
            }
        }
    }
}


let mat = [
    [1],
    [2],
    [3],
]

// let mat = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
// ]


let c = [
    [9, 5, 1], [10, 6, 2], [11, 7, 3], [12, 8, 4]
]

let cc = [
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7]
]

let dir = 'clockwise'
let dir2 = 'counter-clockwise'


console.log(rotate(mat, dir));
// console.log(rotate(mat, dir2));
