var arr = [];
var arr5 = Array.from(Array(5).keys());
console.log(arr5);
console.log(arr5.length);

console.log(arr5[0]);
console.log(arr5[Math.floor(arr5.length/2)]);
console.log(arr5[arr5.length-1]);

var mixedDataTypes = [{a:1},"a",1,true];
console.log(mixedDataTypes);

var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(itCompanies);

for(let i=0;i<itCompanies.length;i++){
    itCompanies[i] = itCompanies[i].toUpperCase();
}

console.log(itCompanies);

function check(company){
    for(let i=0;i<itCompanies.length;i++){
        if(itCompanies[i] === company.toUpperCase()){
            return company;
        }
    }
    return "Not Found";
}

var compO = [];

for(let i=0;i<itCompanies.length;i++){
    if(itCompanies[i].match(/O/g)){
        if(itCompanies[i].match(/O/g).length > 1)
            compO.push(itCompanies[i]);
    }
}

console.log(compO);

itCompanies.sort();

console.log(itCompanies);

itCompanies.reverse();

console.log(itCompanies);

var test1 = itCompanies.map(function(value){
    return value;
});
var test2 = itCompanies.map(function(value){
    return value;
});

test1.splice(0,3);
test2.splice(test2.length - 3, 3);

console.log(test1);
console.log(test2);

var test3 = itCompanies.map(function(value){
    return value;
});

test3.splice(Math.floor(test3.length/2),1);

console.log(test3);

itCompanies.shift();
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);

itCompanies.splice(0,itCompanies.length);
console.log(itCompanies);

//Level3:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages[0]);
console.log(ages[ages.length-1]);
console.log(ages[Math.floor(ages.length/2)]);

var avg = 0;
for(let i=0;i<ages.length;i++){
    avg = avg + ages[i];
}
avg = avg/(ages.length);
console.log(avg);

var ranges = [];

for(let i=1;i<ages.length;i++){
    ranges.push(ages[i]-ages[i-1]);
}

console.log(ranges);

console.log(Math.abs(ages[0] - avg));
console.log(Math.abs(ages[ages.length - 1] - avg));
