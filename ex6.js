const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  
  var to10 = "";
  for(let i=0;i<=10;i++){
      to10 = to10 + i + " ";
  }
  console.log(to10);
  
  var i =0;
  to10 = "";
  while(i<=10){
      to10 = to10 + i + " ";
      i++;
  }
  console.log(to10);
  
  var to0 = "";
  for(let i=10;i>=0;i--){
      to0 = to0 + i + " ";
  }
  console.log(to0);
  
  var i =10;
  to0 = "";
  while(i>=0){
      to0 = to0 + i + " ";
      i--;
  }
  console.log(to0);
  
  n = 7;
  var ton = "";
  for(let i=0;i<=n;i++){
      ton = ton + i + " ";
  }
  console.log(ton);
  
  for(let i=1;i<=n;i++){
      let temp = "#";
      for(let j=1;j<i;j++)
          temp = temp + "#";
      console.log(temp);
  }
  console.log();
  for(let i=0;i<=10;i++){
      console.log(i+' x '+i+' = '+ (i*i));
  }
  console.log();
  for(let i=-1;i<=10;i++){
      if(i==-1){
          console.log("i "+" i^2 "+ " i^3");
      }else{
           console.log(i+'   '+(i*i)+'    '+ (i*i*i));
      }
  }
  console.log();
  var to100 = "";
  for(let i=0;i<=100;i++){
      if(!(i%2)){
          to100 = to100 + i + " ";
      }
  }
  console.log(to100);
  console.log();
  var to100 = "";
  for(let i=0;i<=100;i++){
      if((i%2)){
          to100 = to100 + i + " ";
      }
  }
  console.log(to100);
  console.log();
  var to100 = "";
  for(let i=2;i<=100;i++){
      let isP = true;
      for(let j=2;j<i;j++){
          if(!(i%j)){
              isP = false;
              break;
          }
      }
      if(isP){
          to100 = to100 + i +" ";
      }
  }
  console.log(to100);
  
  console.log();
  var sum100 = 0;
  for(let i=0;i<=100;i++){
      sum100 = sum100 + i;
  }
  console.log(sum100);
  
  console.log();
  var sum100 = 0;
  for(let i=0;i<=100;i++){
      if(!(i%2)){
          sum100 = sum100 + i;
      }
  }
  console.log(sum100);
  
  console.log();
  var sume100 = 0;
  var sumo100 = 0;
  var arr = [];
  for(let i=0;i<=100;i++){
      if(!(i%2)){
          sume100 = sume100 + i;
      }else{
          sumo100 = sumo100 + i;
      }
      arr[0] = sume100;
      arr[1] = sumo100;
  }
  console.log(arr);
  
  arr = [];
  for(var i=0;i<5;i++){
      arr.push(Math.ceil(Math.random()*10));
  }
  console.log(arr)
  
  var hash_map = {};
  arr = [];
  for(var i=0;i<5;i++){
      let rand = Math.ceil(Math.random()*10);
      if(hash_map[rand]){
          i--;
          continue;
      }else{
          hash_map.rand = 1;
          arr.push(rand);
      }
  }
  console.log(arr)
  
  var str="";
  
  for(var i=0;i<6;i++){
      let rand = Math.ceil(Math.random()*126);
      
      if(rand>=0 && rand<=31){
          i--;
          continue;
      }else{
          var chr = String.fromCharCode(rand);
          str = str + chr;
      }
  }
  console.log(str);
  
  console.log();
  
  var r = Math.ceil(Math.random()*50);
  var str="";
  
  for(var i=0;i<r;i++){
      let rand = Math.ceil(Math.random()*126);
      
      if(rand>=0 && rand<=31){
          i--;
          continue;
      }else{
          var chr = String.fromCharCode(rand);
          str = str + chr;
      }
  }
  console.log(str);
  
  console.log('rgb('+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+','+Math.ceil(Math.random()*255)+')');
  
  var carr=[];
  var hash_map = {};
  arr = [];
  for(var i=0;i<5;i++){
      let rand = Math.ceil(Math.random()*countries.length);
      if(hash_map[rand]){
          i--;
          continue;
      }else{
          hash_map.rand = 1;
          carr.push(countries[rand]);
      }
  }
  
  console.log(carr);
  
  var clen = [];
  for(var i=0;i<countries.length;i++){
      clen[i] = countries[i].length;
  }
  console.log(clen)
  
  var mat = [];
  for(var i=0;i<countries.length;i++){
      var temp = [];
      temp[0] = countries[i];
      temp[1] = (countries[i].substring(0,30)).toUpperCase();
      temp[2] = clen[i];
      mat[i] = temp;
  }
  console.log(temp);
  
  var land = [];
  for(var i=0;i<countries.length;i++){
      if(countries[i].includes("land")){
          land.push(countries[i]);
      }
  }
  console.log(land);
  
  var ia = [];
  for(var i=0;i<countries.length;i++){
      if(countries[i].endsWith("ia")){
          ia.push(countries[i]);
      }
  }
  console.log(ia);
  
  var big=ia[0];
  var bigl = ia[0].length;
  for(var i=0;i<ia.length;i++){
      if(ia[i].length>bigl){
          big = ia[i];
          bigl = ia[i].length;
      }
  }
  console.log(big);
  
  var l5 = [];
  for(var i=0;i<countries.length;i++){
      if(countries[i].length == 5){
          l5.push(countries[i]);
      }
  }
  console.log(l5);
  
  var big=webTechs[0];
  var bigl = webTechs[0].length;
  for(var i=0;i<webTechs.length;i++){
      if(webTechs[i].length>bigl){
          big = webTechs[i];
          bigl = webTechs[i].length;
      }
  }
  console.log(big);
  
  var wtmat = [];
  for(var i=0;i<webTechs.length;i++){
      wtmat[i] = [webTechs[i],webTechs[i].length];
  }
  console.log(wtmat);
  
  var arr =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
  for(var i=0;i<arr.length;i++){
      console.log(arr[i]);
  }
  
  var arr = ['banana', 'orange', 'mango', 'lemon'];
  for(var i=0;i<Math.floor(arr.length/2);i++){
      var temp = arr[i];
      arr[i] = arr[arr.length-i-1];
      arr[arr.length-i-1] = temp;
  }
  console.log(arr);
  
  const fullStack = [
      ['HTML', 'CSS', 'JS', 'React'],
      ['Node', 'Express', 'MongoDB']
  ];
  
  for(var i=0;i<2;i++){
      for(var j=0;j<fullStack[i].length;j++){
          console.log(fullStack[i][j]);
      }
  }
  
  var contc = countries.slice();
  contc[0] = "India";
  console.log(countries);
  console.log(contc);
  
  var sortedCountries = countries.slice();
  sortedCountries.sort();
  console.log(sortedCountries);
  
  for(var i=0;i<Math.floor(countries.length/2);i++){
      var temp = countries[i].toUpperCase();
      countries[i] = countries[countries.length-i-1].toUpperCase();
      countries[countries.length-i-1] = temp;
  }
  countries[Math.floor(countries.length/2)] = countries[Math.floor(countries.length/2)].toUpperCase();
  console.log(countries);
  