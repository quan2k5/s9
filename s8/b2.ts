
console.log(validate({name:'quân',age: 19, address:{ street: "dưefvrfd", city: "vinh" }}) );
function validate(obj1 :object) :boolean{
    if('name' in obj1&&'age'in obj1 && 'address' in obj1){ 
        if(typeof(obj1.name)==='string' && typeof(obj1.age)==='number'&& typeof(obj1.address)==='object'){
            return true;
        }
    }
    return false;
}