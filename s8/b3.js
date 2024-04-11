"use strict";
let square = { kind: "square", sideLength: 12 };
let circle = { kind: "circle", radius: 8 };
function caculate(obj) {
    if (obj.kind === 'square') {
        return obj.sideLength * obj.sideLength;
    }
    else if (obj.kind === 'circle') {
        return Math.PI * (obj.radius ** 2);
    }
    return "không hợp lệ ";
}
