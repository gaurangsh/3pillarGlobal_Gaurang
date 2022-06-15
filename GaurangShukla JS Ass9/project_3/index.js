var bigC = document.querySelector(".bigContainer");
var arr = [
    {
        name:"30DaysOfPython",
        summary:"Python",
        values:["Python","Pandas","Numpy","Scikit-learn","OpenCV"],
        state:"Done"
    },
    {
        name:"30DaysOfJavaScript",
        summary:"JavaScript",
        values:["JS","ES6","XMLHttpRequest","Asynchronous","Fetch","Promises"],
        state:"On-going"
    },
    {
        name:"30DaysOfReact",
        summary:"React",
        values:["JS","Front-end","Virtual DOM","Web-App"],
        state:"Coming"
    },
    {
        name:"30DaysOfFullStack",
        summary:"Full-Stack",
        values:["JS","NodeJS","ExpressJS","React","MongoDB","HTML","CSS","MySQL"],
        state:"Coming"
    },
    {
        name:"30DaysOfDataAnalysis",
        summary:"Data Analysis",
        values:["Python","Numpy","Pandas","CSV","Scikit-Learn","Power BI"],
        state:"Coming"
    },
    {
        name:"30DaysOfReactNative",
        summary:"React Native",
        values:["React Native","App Development","React"],
        state:"Coming"
    },
    {
        name:"30DaysOfMachineLearning",
        summary:"Machine Learning",
        values:["AIML","Python","Numpy","Pandas","Scikit-Learn","Supervised Learning","Unsupervised Learning","Neural Networks"],
        state:"Coming"
    }
]

for(let i = 0; i <arr.length;i++){
    var smC = document.createElement("div");
    smC.setAttribute("class","smallContainer");
    var namel = document.createElement("p");
    namel.style.marginLeft="5%";    
    namel.style.width = "40%";
    var details = document.createElement("details");
    details.style.width = "40%";
    details.style.alignItems = "flex-start";
    var summary = document.createElement("summary");
    var state = document.createElement("p");
    state.style.width = "20%";
    namel.innerHTML = arr[i].name;
    summary.innerHTML = arr[i].summary;
    state.innerHTML = arr[i].state;
    details.appendChild(summary);
    for(let j =0;j<arr[i].values.length;j++){
        let val = document.createElement("p");
        val.style.width = "100%";
        val.innerHTML = arr[i].values[j];
        details.appendChild(val);
    }
    smC.appendChild(namel);
    smC.appendChild(details);
    smC.appendChild(state);
    if(arr[i].state == "Done"){
        smC.style.backgroundColor = "rgb(57, 242, 134)";
    }else if(arr[i].state == "On-going"){
        smC.style.backgroundColor = "rgb(255, 233, 120)";
    }else{
        smC.style.backgroundColor = "rgb(251, 73, 73)";
    }
    bigC.appendChild(smC);
}
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var dtDiv = document.getElementById("dateAndTime");
var dt = new Date;
var dtp = document.getElementById("date");
var tp = document.getElementById("time");

dtp.innerHTML = months[dt.getMonth()]+" "+dt.getDate()+", "+dt.getFullYear();
tp.innerHTML = dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();

var bgColStr = "rgb("+Math.ceil(Math.random()*75 + 150) +","+Math.ceil(Math.random()*75 + 150) +","+Math.ceil(Math.random()*75 + 150) + ")";
dtDiv.style.backgroundColor = bgColStr;
var yr = document.getElementById("yr");
yr.style.color = bgColStr;
setInterval(function(){
    dt = new Date;
    dtp = document.getElementById("date");
    tp = document.getElementById("time");
    dtp.innerHTML = months[dt.getMonth()]+" "+dt.getDate()+", "+dt.getFullYear();
    tp.innerHTML = dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
    bgColStr = "rgb("+Math.ceil(Math.random()*75 + 150) +","+Math.ceil(Math.random()*75 + 150) +","+Math.ceil(Math.random()*75 + 150) + ")";
    dtDiv.style.backgroundColor = bgColStr;
    yr.style.color = bgColStr;
},1000);