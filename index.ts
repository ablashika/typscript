// console.log("Hello world!");
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date())

// let obj: any = { x: 0 };
// // None of the following lines of code will throw compiler errors.
// // Using `any` disables all further type checking, and it is assumed 
// // you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;

const namess = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
namess.forEach((s) => {
  console.log(s.toUpperCase());
});

// Object Types

function printName(obj: { first: string; last?: string }) {
  return obj
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// Union type.
// instead of 
function printIds(id: number | string) {
  // console.log(id.toUpperCase());
// Property 'toUpperCase' does not exist on type 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'.
}

// rather
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
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
let myVariable: any = "Hello, TypeScript!";
let lengths: number = (<string>myVariable).length;