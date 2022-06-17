let obj = [{id:1,name: 'Tony Stark'}, {id:2,name: 'Steve Rogers'}];
let clone = Object.assign([{}], obj);
console.log(clone);

let first = {name: 'Tony'};
let last = {lastName: 'Stark'};
let person = Object.assign(first, last);
console.log(person);
// {name: 'Tony', lastName: 'Stark'}