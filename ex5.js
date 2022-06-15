let age = prompt("Enter your age:");
if(age>=18){
    console.log("You are old enough to drive.");
}else{
    console.log("You are left with "+(18-age)+" years to drive.");
}

age = prompt("Enter your age:");
if(age>=18){
    console.log("You are old enough to drive.");
}else{
    console.log("You are left with "+(18-age)+" years to drive.");
}

age = prompt("Enter your age:");
let myAge = 21;

if(age<myAge){
    console.log("You are "+(myAge-age)+" years younger than me.");
}else{
    console.log("You are "+(age-myAge)+" years older than me.");
}

let a = 4
let b = 3

if(a>b){
    console.log(a+' is greater than '+b );
}else{
    console.log(a+' is less than '+b );
}

a = 2
b = 6

a > b ? console.log(a+' is greater than '+b ):console.log(a+' is less than '+b );

a = prompt("Enter a number");

a%2 ? console.log(a+" is an odd number"):console.log(a+" is an even number");

a = prompt("Enter a number");

a%2 ? console.log(a+" is an odd number"):console.log(a+" is an even number");

let score = prompt("Enter your marks:");
score>=80 && score<=100 ? console.log("A") : score>=70 && score<=79 ? console.log("B") : score>=60 && score<=69 ? console.log("C") : score>=50 && score<=59 ? console.log("D") : console.log("F"); 

let month = prompt("Enter a month");
month = month.toLowerCase();

let season = {
    "september":"Autumn",
    "october":"Autumn",
    "november":"Autumn",
    "december":"Winter",
    "january":"Winter",
    "february":"Winter",
    "march":"Spring",
    "april":"Spring",
    "may":"Spring",
    "june":"Summer",
    "july":"Summer",
    "august":"Summer"
}

season[month] ? console.log(season[month]) : console.log("Enter a valid month");

let day = prompt("Enter a day");
day = day.toLowerCase();

day == "saturday" || day == "sunday" ? console.log(day," is a weekend") : console.log(day," is a working day") ;

let daysInMonths = {
    "september":30,
    "october":31,
    "november":30,
    "december":31,
    "january":31,
    "february":28,
    "march":31,
    "april":30,
    "may":31,
    "june":30,
    "july":31,
    "august":31
}

month = prompt("Enter a month");
month = month.toLowerCase();

daysInMonths[month] ? console.log(month," has",daysInMonths[month]," days") : console.log("Please enter a valid month");