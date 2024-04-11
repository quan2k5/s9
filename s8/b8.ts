
type obj1={
    name: string;
}

type obj2={
    age:number;
    school:string;
}
function totalObj(obj1:object, obj2:object):any{
    return {...obj1,...obj2}
}
const infor1: obj1 = { name: "quan"};
const infor2: obj2 = {age:15,school:'sdfg'};
console.log(totalObj(infor1,infor2));



