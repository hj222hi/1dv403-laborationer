 "use strict";

var makePerson = function(persArr){

  
   
  
  var names = persArr.map(function (persArr){ return persArr.name;}).sort(function(a,b){return a.localeCompare(b)}).join(", ").toString();
  var allages = persArr.map(function (persArr){ return persArr.age});
  var res = {};
  var maxage = Math.max.apply(Math, allages);
  var minage = Math.min.apply(Math, allages);
  var avrage = Math.round(allages.reduce(function(a, b) { return a + b }) / persArr.length);
 
 
if (typeof names === 'string' && /^[0-9]+$/.test(allages) === false){
  console.log(avrage);
  res = {averageAge:avrage, maxAge:maxage, minAge:minage, names:names};
  console.log(res);
return res;
 }
 else if(typeof persArr.name != 'string'){
  console.log("du måste ange namnet med bokstäver");
 }
 else if(/^[0-9]+$/.test(allages) === true){
  console.log("Du måste ange åldern med siffror")
 }
 else{
  console.log("DU har gjort grymt fel, gör om gör rätt")
 }


console.log(avrage);
res = {averageAge:avrage, maxAge:maxage, minAge:minage, names:names};
console.log(res);
return res;
 };
var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);



 


