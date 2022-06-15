//Level 1

var fetchData = async () => {
    try {
      var response = await fetch("https://restcountries.com/v2/all")
      var countries = await response.json()
      var cname = [];
      for(var i=0;i<countries.length;i++){
        
        cname[i] = countries[i].name;
      }
      console.log(countries);
      console.log(cname);
    } catch (err) {
      console.error(err)
    }
  }
fetchData();

  // Level 2

 var fetchDatacats = async () => {
    try {
      var response = await fetch("https://api.thecatapi.com/v1/breeds")
      var cats = await response.json()
      var cname = [];
      for(var i=0;i<cats.length;i++){
        
        cname[i] = cats[i].name;
      }
      console.log(cats);
      console.log(cname);
      /*console.log(cname);*/
    } catch (err) {
      console.error(err)
    }
  }
fetchDatacats();

// Level 3

var fetchDatacats1 = async () => {
    try {
      var response = await fetch("https://api.thecatapi.com/v1/breeds")
      var cats = await response.json()
      var avg = [];
      for(var i=0;i<cats.length;i++){
        
        var w = cats[i].weight.metric;
        w = w.split(" - ");
        var w1 = parseInt(w[0]);
        var w2 = parseInt(w[1]);
        var a = (w1+w2)/2
        avg[i] = a;
      }
      console.log(avg);
      /*console.log(cname);*/
    } catch (err) {
      console.error(err)
    }
  }
fetchDatacats1();


var fetchData1 = async () => {
    try {
      var response = await fetch("https://restcountries.com/v2/all")
      var countries = await response.json()
      var top10 = [];
      countries.sort(function(a, b){
        var keyA = a.area,
            keyB = b.area;
        // Comparing the areas of 2 countries
        if(keyA > keyB) return -1;
        if(keyA < keyB) return 1;
        return 0;
      });
      for(var i=0;i<10;i++){
        
        top10[i] = countries[i].name;
      }
      console.log(countries);
      console.log(top10);
    } catch (err) {
      console.error(err)
    }
  }
  fetchData1();

  var fetchData2 = async () => {
    try {
        var official = {};
      var response = await fetch("https://restcountries.com/v2/all")
      var countries = await response.json()
      for(var i=0;i<countries.length;i++){
        
        var l = countries[i].languages;
        for(var j=0;j<l.length;j++){
            official[l[j].name]=1;
        }
      }
      console.log(official);
      console.log(Object.keys(official).length);
    } catch (err) {
      console.error(err)
    }
  }
  fetchData2();