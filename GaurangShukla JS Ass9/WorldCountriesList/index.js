function display(){
    var req = new XMLHttpRequest();
    req.open("GET",'https://restcountries.com/v2/all');
    req.send();
    req.addEventListener("load",function(){
        var data = req.responseText;
        data = JSON.parse(data);
        var cont = [];
        for(let i=0;i<data.length;i++){
            cont[i] = data[i].name.toUpperCase();
        }
        console.log(cont);
        var bigC;
        var load = document.getElementById("load");
        load.style.display = "none";
        for(let i=0;i<cont.length;i++){
            if(i%6==0){
                bigC = document.createElement("div");
                bigC.setAttribute("class","bigContainer");
                document.body.appendChild(bigC);
            }
            
            var smallC = document.createElement("div");
            smallC.setAttribute("class","smallContainer");
            var p = document.createElement("p");
            p.innerHTML = cont[i];
            p.style.fontSize = "1vw";
            smallC.appendChild(p);
            bigC.appendChild(smallC);
        
        }
    })
}

display();