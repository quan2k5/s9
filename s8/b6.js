"use strict";
function checkType(a) {
    if (Array.isArray(a)) {
        a.forEach(e => {
            console.log(e);
        });
    }
    else {
        console.log(a);
    }
}
checkType(['dfg0', 'sdefrgth', 'sqwdergthy']);
