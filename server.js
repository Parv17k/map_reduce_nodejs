const { Worker,workerData, isMainThread, parentPort } = require('worker_threads');
let fs =require("fs");
if (isMainThread) {
  let readStream=fs.createReadStream("./big.txt");
  
  let result=[];
  let readStremEND=false;
  
  readStream.on('data', function (data) {
    let temp=(new Worker("./map.js",{ workerData: data.toString()}));
    temp.on('message', (output) => { 
        let stream = fs.createWriteStream("output.json", {flags:'a'});
   stream.write(JSON.stringify(output));
   
    });
    
    
        });
   



 
} 
