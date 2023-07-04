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
// Union type.
// instead of 
function printIds(id) {
    // console.log(id.toUpperCase());
    // Property 'toUpperCase' does not exist on type 'string | number'.
    //   Property 'toUpperCase' does not exist on type 'number'.
}
// rather
function printId(id) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is of type 'number'
        console.log(id);
    }
}
//one key difference between the type alias type and inferrence is A type cannot be changed after being created
//type assertion
// Type assertion is used to indicate to the compiler 
// that you have performed a type check yourself 
// and are certain about the type of a value. 
// It is important to note that type assertions do not perform any 
// runtime type checks or data conversion. 
// They are purely a way to provide hints to the TypeScript 
// compiler during static analysis.
var myVariable = "Hello, TypeScript!";
var lengths = myVariable.length;
// literal types
//literal types are situation where the value, or the literals can become a type,
// let x :"hello" = "hello"
// x = "hello"
// //you can also use union type here where,
// let y:  "hello" | "hii" = "hii"
// y = "hello"
// //y and x can not be anyother time
// // literal inference
// declare function handleRequest(url: string, method: "GET" | "POST"): void;
// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
//beacasue req.method, the method as a property is a string which not the case because 
//method has a type "get" and "post". this is where we can use type asserstion
// // Change 1:
// const req = { url: "https://example.com", method: "GET" as "GET" };
// // Change 2
// handleRequest(req.url, req.method as "GET");
// // Another way to do this You can use as const to convert the entire object to be type literals:
// const reqs = { url: "https://example.com", method: "GET" } as const;
// handleRequest(reqs.url, reqs.method);
//narrowing
//control flow analysis
// function processValue(value: string | number): void {
//   if (typeof value === "string") {
//     // Inside this block, TypeScript narrows down the type of `value` to `string`
//     console.log(value.toUpperCase());
//   } else {
//     // Inside this block, TypeScript narrows down the type of `value` to `number`
//     console.log(value.toFixed(2));
//   }
//   // After the conditional blocks, TypeScript knows that `value` can only be `string` or `number`
//   // and does not allow access to any other methods or properties specific to other types.
//   // For example, the following line would result in a compilation error:
//   // console.log(value.length); // Error: Property 'length' does not exist on type 'string | number'.
// }
// Function Type Expressions
// The simplest way to describe a function is with a function 
// type expression. These types are syntactically similar to arrow functions:
function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
