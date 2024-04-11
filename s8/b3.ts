type Square={
    kind:'square';
    sideLength:number;
}
type Circle={
    kind:'circle';
    radius:number;
}
let square: Square = { kind: "square", sideLength: 12 };
let circle: Circle = { kind: "circle", radius: 8 };
function caculate(obj:Square|Circle):number|string{
    if(obj.kind==='square'){
        return obj.sideLength*obj.sideLength;
    }else if(obj.kind==='circle'){
        return  Math.PI*(obj.radius**2);
    }
    return"không hợp lệ "
}