"use strict";
function parseInput(input) {
    if (input === 'number') {
        return 1111;
    }
    if (input === "null") {
        return null;
    }
    if (input === 'boolean') {
        return true;
    }
    if (input === 'string') {
        return input;
    }
    if (input === 'undefined') {
        return undefined;
    }
}
console.log(parseInput("number"));