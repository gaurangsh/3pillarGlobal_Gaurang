var techStack = document.getElementById("techStack");

var tsarr = ["JAVASCRIPT","PANDAS","HTML","REDUX","PYTHON","REACT","NODE","MONGODB"];
var colorarr = ["rgb(93, 175, 251)","rgb(255, 225, 94)","rgb(255, 105, 94)","rgb(108, 94, 255)","rgb(255, 135, 215)","rgb(135, 255, 163)","rgb(128, 24, 107)","rgb(243, 183, 56)"];
var backarr = ["rgb(255, 255, 255)","rgb(212, 210, 210)","rgb(192, 191, 191)"]
var i = 1;
setInterval(function(){
    i = i%8;
    techStack.innerHTML = tsarr[i];
    techStack.style.color = colorarr[i];
    i=i+1;
},2000)
var j = 1;
setInterval(function(){
    j = j%3;
    document.body.style.background = backarr[j];
    j=j+1;
},3000)

var emoarr = ["&#127793;","&#128161;","&#128165;","&#128187;"]
var flauntarr = ["Motivational Speaker","Content Creator","Educator","Instructor","Programmer"];

var emo = document.getElementById("emoji");
var ftext = document.getElementById("flauntText");

setInterval(function(){
    emo.innerHTML = emoarr[Math.floor(Math.random() * 4)];
    ftext.innerHTML = flauntarr[Math.floor(Math.random() * 5)];
},2500);

var margin = 0;
setInterval(function(){
    margin = margin%25;
    var m = margin+"px";
    ftext.style.marginLeft = m;
    margin = margin+1;
},100)