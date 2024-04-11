let infor :string|number;
infor='le anh quan';
infor=5;
// union type cho phep chung ta co the gan cac gia tri vs kieu du lieu khac nhau cho bien(dk kieu du lieu cua 
//gia tri dc gan phai co trong danh sach kieu du lieu luc khai bao bien)
type person1={
    name:string;
}
type person2={
    age:number;
    school:string;
}
type person=person1&person2;
let employee: person = {
    name: "quan",
    age: 19,
    school:'dfdffd',
};
// intersection type cho phep chung ta chung ta co the xay dung 1 doi tuong tu 1 kieu ket hop nhieu kieu khac