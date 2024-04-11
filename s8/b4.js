"use strict";
function caculateNumber(number) {
    if (Array.isArray(number)) {
        let arr = number.map(e => {
            return e * e;
        });
        return arr;
    }
    return number * number;
}
console.log(caculateNumber([1, 2, 3]));
