const { createCipheriv } = require('crypto')
var fs=require('fs')

fs.readFile('input.txt',function(err,data){
    if(err)return console.log('erreur')
    var newdata=data.toString().split("\n")
    console.log(newdata[0])
    var tab=[".txt"]
    var liste=[];


    for(let i=0;i<newdata.length;i++){
        for(let j=0;j<tab.length;j++){
            if(newdata[i]===tab[j]){ 
                    liste.push(newdata[i])
            }
        }
    }
	console.log(liste)
})
console.log("programme asynchrone fini")
