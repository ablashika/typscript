// console.log("Hello world!");
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
// let obj: any = { x: 0 };
// // None of the following lines of code will throw compiler errors.
// // Using `any` disables all further type checking, and it is assumed 
// // you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;
var myName = "Alice";
var names = ["Alice", "Bob", "Eve"];
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Contextual typing also applies to arrow functions
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Object Types
function printName(obj) {
    return obj;
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
