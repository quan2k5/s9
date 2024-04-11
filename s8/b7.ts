function checkTypeed(value:unknown):string{
    if(typeof(value)=='number'){
        return 'number';
    }
    if(typeof(value)=='object'){
        if(Array.isArray(value)){
            return 'Array';
        }else{
            return 'Object';
        }
    }
    return 'Khong xac dinh dc kieu du lieu';
}
console.log(checkTypeed([1,2,3,4,5]));
