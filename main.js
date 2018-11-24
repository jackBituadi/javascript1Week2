console.log("Hello World!"); //english
console.log("Salut le monde!"); //francais
console.log("Kalhmera kosme!"); //ellhnika
console.log("Mbote na mokili mobimba"); //lingala

// question number 2
console.log('Im awesome');

//question number 3

let x;
console.log('the value of my variable x will be: a string');
console.log(x);
x="greece";
console.log('the value of x will be: a string');
console.log(x);

//question number 4

let y = "athens";
console.log('the value of my string will be: athens');
console.log(y);
y="peiraias";
console.log('the value of my variable x will be: peiraias');
console.log(y);
x="france";
console.log('the value of my variable x will be: france');
console.log(x);
console.log(Math.round(7.25));
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
if( z>a){
    console.log("the highest integer is :" + z);

} else {
    console.log("the highest integer is :" + a);
}

// arrays

let colours = [];
console.log('the value of colours will be: an array');
console.log(colours);
let myAnimals = ["dog","cat","horse"];
console.log(myAnimals);
myAnimals[3] = "baby pig";
console.log(myAnimals);

// question number 7

let myString = "this is a test";
console.log(myString.length);

// question number 8

function myValueType(value1,value2) {

if(typeof value1 == typeof value2){
    console.log(" they are the same type.");

}else {
    console.log(" they are not the same type.");
}
}
// question 8.1

let val1 = "jack";
let val2 = 34 ;
let val3 = [1,2,3];
let val4 = false;
console.log('The value of my variable val1 is: ' + val1);
console.log('The value of my variable val2 is: ' + val2);
console.log('The value of my variable val3 is: ' + val3);
console.log('The value of my variable val4 is: ' + val4);


console.log('the type of my first value will be: a string');
console.log(typeof val1);

console.log('the type of my second value will be: a number');
console.log(typeof val2);

console.log('the type of my third value will be: an object');
console.log(typeof val3);

console.log('the type of my fourth value will be: a boolean');
console.log(typeof val4);

myValueType (val1,val2);
myValueType (val1,val3);
myValueType (val1,val4);
myValueType (val2,val3);
myValueType (val2,val4);
myValueType (val3,val4);

// question 9

x= 7 ;
x %=3;
console.log(x);

// question 10

// question 10.1
// ofcourse we can store multiple types in an array
let array1 = [4, "jack", 56, "maria", 78]
console.log(array1);
console.log (x/0);
let c= 4;
console.log(c/0);
if( x/0 === c/0){
    console.log("we can compare the infinity");

}


