"use strict";
function totalObj(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const infor1 = { name: "quan" };
const infor2 = { age: 15, school: 'sdfg' };
console.log(totalObj(infor1, infor2));
