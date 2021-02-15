const { Worker, workerData,isMainThread, parentPort } = require('worker_threads');



let map=function (){

    // implement your code here.

return workerData.split(" ").map(el=>{
   el=el.trim();
    
    let dict={};dict[el]=1; 
    return dict
});
};

parentPort.postMessage(map());