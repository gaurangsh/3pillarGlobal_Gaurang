var bigC
for(var i = 0;i<102;i++){
    if(i%6==0){
        bigC = document.createElement("div");
        bigC.setAttribute("class","bigContainer");
        document.body.appendChild(bigC);
    }

    var smallC = document.createElement("div");
    smallC.setAttribute("class","smallContainer");
    var h2 = document.createElement("h2");
    h2.innerHTML = i;
    h2.style.fontSize = "2vw";
    h2.style.color = "white";
    smallC.appendChild(h2);
    bigC.appendChild(smallC);
    if(isPrime(i)){
        smallC.style.backgroundColor = "rgb(248, 61, 61)";
    }else if((i%2)!=0){
        smallC.style.backgroundColor = "rgb(248, 224, 73)";
    }

    
}

function isPrime(x){
    let t = true;
    if(x==0 || x==1){
        return false;
    }
    for(let i=2;i*i<=x;i++){
        if(x%i==0){
            t = false;
            break;
        }
    }
    return t;
}