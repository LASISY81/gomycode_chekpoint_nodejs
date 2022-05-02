var fs=require('fs')
fs.readFile('input.txt',function(err,data){
    if(err)return console.lo('erreur')

	var newdata=data.toString().split('')
    var compteur= 0;
    var tab=["\n","\t"];

        for (let i=0; i<newdata.length; i++){
            for(let j=0;j<tab.length;j++){
                if(newdata[i]===tab[j]){
                    compteur=compteur+1
            }}
    } 
	console.log("le nombre de saut de ligne est:" +compteur)
})
console.log("programme asynchrone fini")