interface Person {
    name:string;
    age:number
}

interface Employee extends Person{
    employeeId:number;
}

const employeer: Employee = {
    name: "Quan",
    age: 18,
    employeeId: 18,
  };
  
  console.log(employeer);