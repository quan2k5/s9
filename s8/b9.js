"use strict";
function manageTypes(argument1) {
    if (typeof (argument1) == 'number') {
        console.log(argument1 * argument1);
    }
    if (typeof (argument1) == 'string') {
        console.log(argument1.length);
    }
    if (Array.isArray(argument1)) {
        console.log(argument1.length);
    }
}
manageTypes([1, 2, 3, 4, 5, 5, 6, 7]);
