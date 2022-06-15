var challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
challenge = challenge.toUpperCase();
console.log(challenge);
challenge = challenge.toLowerCase();
console.log(challenge);
challenge = challenge.substring(1);
console.log(challenge);
var challenge = '30 Days Of JavaScript';
challenge = challenge.substring(0,2);
console.log(challenge);
challenge = '30 Days Of JavaScript';
console.log(challenge.includes("Script"));
var arr = challenge.split("");
console.log(arr);

var arr2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',');
console.log(arr2);

challenge = "30 Days Of JavaScript";
var result = challenge.replace("JavaScript", "Python");
console.log(result)

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(11));

console.log(challenge.indexOf('a'));

console.log(challenge.lastIndexOf('a'));

console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));

console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));

challenge = " 30 Days Of JavaScript ";
result = challenge.trim();

console.log(result)

console.log(result.startsWith("30"));

console.log(result.startsWith("0",1));

console.log(result.endsWith("Script"));

console.log(result.endsWith("Scr",result.length - 3));

arr = result.match(/a/g);

console.log(arr);

var v1 = "30 Days of";
var v2 = "Javascript";

v1 = v1.concat(v2);
console.log(v1)
console.log(result.repeat(2));

console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");

console.log(" \"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\" ");

var v = '10';
if(typeof v === typeof 10){
    console.log("Same");
}else{
    console.log("Not the same");
}

v = parseInt(v);

if(typeof v === typeof 10){
    console.log("Same");
}else{
    console.log("Not the same");
}

v = parseFloat('9.8');

if(v === 10){
    console.log("Same");
}else{
    console.log("Not the same");
}

v = Math.round(v);

if(v === 10){
    console.log("Same");
}else{
    console.log("Not the same");
}

console.log("Python".includes("on") && "Jargon".includes("on"));

console.log("I hope this course is not full of jargon".includes("jargon"));

console.log(Math.floor((Math.random() * 100) + 0));

console.log(Math.floor((Math.random() * 100) + 50));

console.log(Math.floor((Math.random() * 255) + 0));

console.log("JavaScript"[Math.floor((Math.random() * ("JavaScript".length-1)) + 0)]);

for(var i=1;i<=5;i++){
    var temp = i + ' 1';
    var k = 1;
    for(var j=1;j<=3;j++){
        k = k*i;
        temp = temp +" " +k;
    }
    console.log(temp);
}

var text = 'You cannot end a sentence with because because because is a conjunction';

console.log(text.substr(0,text.indexOf("because because because"))+text.substr(text.indexOf("because because because") + "because because because".length,text.length-text.indexOf("because because because")+"because because because".length));

var v = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

console.log(v.toLowerCase().match(/love/g).length)

v = 'You cannot end a sentence with because because because is a conjunction';

console.log(v.match(/because/g).length)

var sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'



for(var i=0;i<sentence.length;i++){
    if(!((sentence[i]>="A"&&sentence[i]<="Z")||(sentence[i]>="a"&&sentence[i]<="z")||sentence[i]==" "||sentence[i]==".")){
        sentence = sentence.replace(sentence[i],"");
        i--;
    }
}
console.log(sentence)

var sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

arr = sentence.split(" ");

var income  = 0;
for(var i=0;i<arr.length;i++){
    var temp = parseInt(arr[i]);
    if((temp%10>=0&&temp%10<=9)){
        income = income + temp;
    }
}
console.log(income)
