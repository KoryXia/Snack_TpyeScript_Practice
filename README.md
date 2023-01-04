# TypeScript

It's a superset of JavaScript and it adds optional static typing to the language. TS file can be compiled into any version of JavaScript.

## Environment configuration

1. It assumed that it already has `Node.js` environment in the computer.

2. Install `TypeScript`

   ```shell
   npm i -g typescript
   ```

3. Create a `.ts` file

4. Compile `.ts` file

   ```shell
   tsc xxx.ts
   ```

## Variable type declaration

```typescript
// JS, variable is not type.
let a;
a = 10;
a = "hello world"

//TS, declare type 
let b: number;
b = 10;
b = "hello world"; // has a error in this line, variable b is delared as a number
```

Usually, line 7 and 8 can be written like, which is same as Python:

```typescript
let b = 10;
```

Line 7 are usually used for parameters in functions and return type:

```typescript
function sum(a: number, b: number): number{
  return a + b;
}
let result = sum(10, 20);//result is number type
sum(10, "20"); // error
```

## Variable type

```typescript
// like const value, always be 10.
let a: 10; 

// Unino type, b can be male, female or other
let b: "male" | "female" | "other"; 

// any types, any is not recommended, any can be assigned to any other type variables
let c: any; 

// unknown type, it can't be assigned to any other type variables
let d: unknown; 

// type assert
d as String;

// void type
function fn(): void {}

// nerver, never return the result even undefined
function fn2(): never {
    throw new Error("Here is a error");
}

// object
//{variable1: type, variable2: type}
// ? means optional property
let obj1: {name: string, age?: number};
obj1 = {name: "xsd", age: 25};
obj1 = {name: "xsd"};

//[variable: string] means any name of properties
let obj2: {name: string, [propName: string]: any};
obj2 = {name: "xsd", age: 25};
obj2 = {name: "xsd", gender: "male"};

//funtion
let fn3: (a: number, b:number) => number;
fn3 = (x: number, y: number): number  => {
    return x + y;
}

// array
let arr1: string[] // Array<string>
arr1 = ["a", "b", "c"];

// tuple
let tuple1:[string, number];
tuple1 = ["hello", 123];

// enum
enum Gender{
    Male = 0,
    Female = 1
};
let obj3: {name: string, gender: Gender};
obj3 = {name: "xsd", gender: Gender.Male};

// type alias
type myType = 1 | 2 | 3 | 4 | 5;
let e: myType
```

## Compile options

- Auto compile. Watch the `xxx.ts` file and compile it automatically.

  ```shell
  tsc xxx.ts -w
  ```

- Create the `tsconfig.json` file in root directory. run `tsp` according to the config file.

  ```shell
  tsc -w
  ```

  - `tsconfig.json` configuration:

    - ******: any directory
    - *****: any file
    - **include**: need to compile
    - **exclude**: no need to compile
    - **extends**: extend existing config file
    - **files**: compile specified files
    - **compilerOptions**: compiler options
    - **target**: JS version: ES6, ES3
    - **module**: module standard
    - **lib**: specify libraries need to use, generally do not need to change
    - **outDir**: output directory after compiled
    - **outFile**: merge compiled files
    - **allowJs**: whether compile JS files
    - **checkJs**: whether check JS syntax
    - **removeComments**: whether remove comments
    - **noEmit**: don't emit compiled files.
    - **noEmitOnError**: disable emit files if any type checking are reported
    - **alwaysStrict**: whether use strict
    - **noImplicitAny**: no any type
    - **noImplicitThis**: no implicit this pointer
    - **strictNullChecks**: null safe check
    - **strict**: master switch of strict mode

    ```json
    {
        "include": [
            "./src/**/*"
        ],
        "exclude": [
            "./src/dont_compile/*"
        ],
        "extends": "./config/base.json",
        "files": [
            "core.ts",
            "sys.ts",
        ],
        "compilerOptions": {
            "target": "ES6",
            "module": "ES6",
            "lib": ["DOM","ES6"],
            "outDir": "./dist",
            "outFile": "./dist/app.js",
            "allowJs": false,
            "checkJs": false,
            "removeComments": false
            "noEmit": false,
            "noEmitOnError": false
            "alwaysStrict": true,
            "noImplicitAny": true,
            "noImplicitThis": true
            "strictNullChecks": false
            "strict": false
        }
    }
    ```

## Webpack with TypeScript

Install dependencies.

```shell
npm init
npm i -D webpack webpack-cli typescript ts-loader
```

Create a `web pack.config.js` config file.

```js
const path = require("path");
module.exports = {
    entry: "./src/index.ts", // entry file
    // packaged files directory
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    // specify modules for packaging
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node-modules/
            }
        ]
    }
}
```

## OOPS

The syntax of OOPS in TypeScript or JavaScript is quite similar to the concept of OOPS in Java. Following are some examples.

### Class

```typescript
class Person {
    // instance property
    name = "xsd";
    age = 25;

    // static property. use class to access
    static gender = "male";
    // readonly property 
    readonly password = "123456";

    // methods

    getOffer = (company: string): string => {
        return "Get a offer from " + company;
    }
}
const person = new Person();
// access instance properties 
console.log(person.name, person.age);
// access static property
console.log(Person.gender);
// set person.name
person.name = "XIA";
console.log(person.name);
// call methods
console.log(person.getOffer("a company"));
```

### Constructor and this pointer

```typescript
class Person {
    name: string
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}
const person = new Person("xsd", 24);
```

### Inheritance and super pointer

```typescript
class Animal{
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    action() {
        console.log("lalala")
    }
}

// Animal is the super class / parent class
class Dog extends Animal{
    gender: string;
    constructor(name: string, age: number, gender: string) {
        // super pointer to super class
        super(name, age);
        this.gender = gender;
    }

    // Override the parent class method
    action(): void {
        console.log("wangwangwang")
    }
}
const dog = new Dog("wangcai", 1, "male");
console.log(dog);
dog.action();
```

### Abstract 

#### Abstract class

**Abstract class** can't create its instance object. It can only be inherited.

**Abstract methods** can only be written in the abstract class and it must be overridden by child class.

```typescript
abstract class Animal{
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
		
 		// abstract method
    abstract action(): void;
}

// Animal is the super class / parent class
class Dog extends Animal{
    action(): void {
        console.log("wangwangwang")
    }
}
let dog = new Dog("wangcai", 1);
console.log(dog);
dog.action();
```

#### Interface

Interface can be used to declare the structure of a class. Interface also can be used to declare a type. In interface, **all methods are abstract methods and all properties can't be initialize**.

```typescript
interface myInterface {
    name: string;
    age: number;
    say(): void;
}
```

Use `implements` keywords can implement interfaces

```typescript
class Person implements myInterface{
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    say(): void {
        console.log("hello")
    }
}
```

### Encapsulate class properties

In order to hide properties of the class from outside and prevent arbitrary modification of properties. Encapsulation can enhance the security of the code. In TypeScript, modifiers can be placed before properties to implement encapsulation.

- **public**: default modifiers, properties can be modified anywhere
- **protected**: properties can only be modified in the class and the child class
- **private**: properties can only be modified in the class
  - Need to expose `get` and `set` methods to access properties.  It can be implemented by add `set` and `get` keyword and following the property name.

```typescript
class Person {
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    get name(): string{
        return this._name;
    }
    set name(name: string){
        this._name = name;
    }
    get age(): number{
        return this._age;
    }
    set age(age: number){
        this._age = age;
    }
}
```

## Generic

When declare a function or a class, if meet some situation that can not specific the type. Generic can be used to solve this problem. 

```typescript
const fn = <T>(x: T): T=> {
    return x;
}
fn(10);// auto specify type
fn<number>(10); // manually specify type
```

# Practice mini project (Snack)

Using Vite + Vue.js + TypeScript

**Code**: [Click me!](https://github.com/KoryXia/Snack_TpyeScript_Practice)

**Demo**: [Click me!](https://koryxia.github.io/Snack_TpyeScript_Practice/)

# Reference

[TypeScript教程](https://www.bilibili.com/video/BV1Xy4y1v7S2?p=1&vd_source=e6cb8855f35d80a30a9604a86caa35eb)

