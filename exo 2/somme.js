
const process = require("process")
var tab=process.argv;
var som =0;
    for (let i=0; i<tab.length; i++){
        if(i>=2){
            som= som +(Number(tab[i]))
        }
    }

console.log(som)