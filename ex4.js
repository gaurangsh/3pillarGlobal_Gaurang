var dog = {};
console.log(dog);

dog.name = "Tom";
dog.legs = 4;
dog.color = "white";
dog.age = 5;
dog.bark = "woof woof";

console.log(dog.name," ", dog.legs," ",dog.color," ",dog.age," ",dog.bark);

dog.breed = "Pug";
dog.getDogInfo = dog.name+", "+ dog.legs+", "+dog.color+", "+dog.age+", "+dog.bark + ", "+dog.breed;

console.log(dog);

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

var objarr = Object.values(users);

var g50 = 0;
for(let i=0;i<objarr.length;i++){
    let temp = Object.values(objarr[i]);
    if(temp[4]>=50){
        g50 = g50 + 1;
    }
}
//console.log(objarr);
console.log(g50);
var keys = Object.keys(users);
console.log(keys);
function MERN(arr){
    let m = false;
    let e = false;
    let r = false;
    let n = false;
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="MongoDB"){
            m = true;
        }
        if(arr[i]=="Express"){
            e = true;
        }
        if(arr[i]=="React"){
            r = true;
        }
        if(arr[i]=="Node"){
            n = true;
        }
    }
    return m&&e&&r&&n;
}
var mernDevs = [];
for(let i=0;i<keys.length;i++){
    let temp = users[keys[i]].skills;
    if(MERN(temp)){
        mernDevs.push(keys[i]);
    }
}

console.log(mernDevs);
