const fs = require("fs")
var data=fs.readFileSync('input.txt')

var newdata=data.toString().split('')
var compteur= 0;
var tab=["\n","\t"];
  for (let i=0; i<newdata.length; i++){
    for(let j=0;j<tab.length;j++){
      if(newdata[i]===tab[j]){
        compteur=compteur+1
      }}
  } 

  

console.log(compteur)


