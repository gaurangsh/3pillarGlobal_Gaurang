var firstName = "Gaurang";
var lastName = "Shukla";
var country = "India";
var city = "Noida";
var age = 22;
var isMarried = false;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);

console.log(typeof '10' == typeof 10);

console.log(parseInt('9.8') == 10);

console.log(true &&(4>3));
console.log(true &&(4>=3));
console.log(false ^ (4<3));
console.log(true &&(4==4));
console.log(true &&(4===4));
console.log(false ^ (4!=4));
console.log(false ^ (4!==4));
console.log(false ^ (4!='4'));
console.log(true &&(4=='4'));
console.log(false ^ (4==='4'));

console.log(new Date().getFullYear());
console.log(new Date().getMonth()); //Jan is 0 and Dec is 11
console.log(new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear());

console.log(new Date().getDate());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(Date.now());

var b = parseFloat(prompt("Enter Base: ",""));
var h = parseFloat(prompt("Enter Height: ",""));
console.log("Area of triangle: "+0.5*b*h);

var a = parseFloat(prompt("Enter Side a: ",""));
var b = parseFloat(prompt("Enter Side b: ",""));
var c = parseFloat(prompt("Enter Side c: ",""));
console.log("Perimeter of triangle: "+a+b+c);

var l = parseFloat(prompt("Enter Length: ",""));
var w = parseFloat(prompt("Enter Width: ",""));
console.log("Perimeter of Rectangle: "+2*(l+w));

var r = parseFloat(prompt("Enter Radius: ",""));
console.log("Perimeter of Circle: "+2*3.14*r);
console.log("Area of Circle: "+3.14*r*r);

console.log((10-2)/(6-2));

var h = parseFloat(prompt("Enter hours: ",""));
var r = parseFloat(prompt("Enter rate per hour: ",""));
console.log("Your weekly earning: "+h*r);

if((firstName.length)>7){
    console.log("Long Name");
}else{
    console.log("Short Name");
}

var firstName = 'Asabeneh'
var lastName = 'Yetayeh'

if(firstName.length > lastName.length){
    console.log("Your first name, " + firstName + " is longer than your family name, Yetayeh")
}

let myAge = 250
let yourAge = 25

console.log("I am "+(myAge-yourAge)+" older than you");

myAge = parseFloat(prompt("Enter Birth Year: "));
var diff = new Date().getFullYear() - myAge;

if(diff>=18){
    console.log("You are " + diff+". You are old enough to drive");
}else{
    console.log("You are " + diff+". You will be allowed to drive after"+ (18 - diff)+" years.");
}

myAge = parseFloat(prompt("Enter Birth Year: "));
var diff = new Date().getFullYear() - myAge;

if(diff>=18){
    console.log("You are " + diff+". You are old enough to drive");
}else{
    console.log("You are " + diff+". You will be allowed to drive after"+ (18 - diff)+" years.");
}

var years = parseFloat(prompt("Enter the numbers of years you want to live: "));
console.log("You lived "+years*365.25*24*60*60+" seconds");

var date = new Date();

console.log(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes());
console.log(date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes());
console.log(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes());
