function async(resolve){
   setTimeout(resolve, 3000);
}

const p = new Promise(async);

function callback(){
    console.log("Promise resolved after 3 seconds");
}
p.then(callback); // Calls callback when the promise is resolved