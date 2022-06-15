function fullName(fn){
    console.log(fn);
}
fullName("Gaurang");

function fullName(fn,ln){
    return fn + " "+ln;
}
console.log(fullName("Gaurang","Shukla"));

function addNumbers(a,b){
    return a + b;
}
console.log(addNumbers(2,3));

function areaOfRectangle(l,w){
    return l*w;
}
console.log(areaOfRectangle(2,3));

function perimeterOfRectangle(l,b){
    return 2*(l+b);
}
console.log(perimeterOfRectangle(2,3));

function volumeOfRectPrism(l,b,h){
    return l*b*h;
}
console.log(volumeOfRectPrism(2,3,5));

function areaOfCircle(r){
    return 3.14*r*r;
}
console.log(areaOfCircle(10));

function circumOfCircle(r){
    return 3.14*r*2;
}
console.log(circumOfCircle(5));

function density(m,v){
    return m/v;
}
console.log(density(10,2));

function speed(d,t){
    return d/t;
}
console.log(speed(6,2));

function weight(m,g){
    return m*g;
}
console.log(weight(10,9.8));

function convertCelsiusToFahrenheit(c){
    return (c*9/5 + 32);
}
console.log(convertCelsiusToFahrenheit(32));

function bmi(w,h){
    let b = w/(h*h);
    if(b<18.5){
        console.log("Underweight");
    }else if(b>=18.5 && b<25){
        console.log("Normal Weight");
    }else if(b>=25 && b<30){
        console.log("Overweight");
    }else{
        console.log("Obese");
    }
    return b;
}

console.log(bmi(70,1.75));

function checkSeason(month){
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

    return season[month] ? season[month] : "Enter a valid month" ;

}

console.log(checkSeason("September"));
console.log(checkSeason("Invalid Month"));

function findMax(a,b,c){
    return Math.max(a,b,c);
}
console.log(findMax(0, 10, 5));

function solveLinEquation(v,a,b,c){
    if(!a){
        a=0;
    }
    if(!b){
        b=0;
    }
    if(!c){
        c=0;
    }
    if(!v){
        v=0;
    }
    if(x==v){
        if(b==0){
            
        }
    }
    
    
}
