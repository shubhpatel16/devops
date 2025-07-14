/*const user = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com"
};*/

/* class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area() {
        const area = this.width * this.height;
        return area;
  }
    paint(){
      console.log(`Painting rectangle of color ${this.color}`);
    }
    destroy() {
        console.log("Destroying rectangle");
    }
}

const rect = new Rectangle(10, 5, 'blue');
rect.paint();
const area = rect.area();
console.log(`Area of rectangle: ${area}`);
rect.destroy();*/

/*const now = new Date();
console.log(now.toISOString());*/

/*const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
console.log(map.get('name','age')); // Alice
console.log(map.get('age')); // 25*/

/*const d = new Date();
console.log(d.getFullYear())
console.log(d.getMonth()+1)
console.log(d.getDate()) // Months are 0-indexed*/

/*function name(){
  console.log("shubh");

}
setTimeout(name, 10000); // Calls name after 1 second*/

/*function setTimeoutPromisified(ms){

  let p = new Promise(resolve => setTimeout(resolve,ms));
  return p;
}

function callback(){
  console.log(" 3sec have passed");
}
setTimeoutPromisified(3000).then(callback); // Calls callback after 3 seconds*/

/*function wait(resolve){
  setTimeout(resolve, 10000);
}

function setTimeoutPromisified(){
  return new Promise(wait);
}

function main(){
  console.log("Hello, World!");
}

setTimeoutPromisified().then(main); // Calls main after 3 seconds*/

function shubh(raman){
  setTimeout(raman,3000);

}
let p = new Promise(shubh);

function callback(){
  console.log("Promise resolved");
}

p.then(callback); // Calls callback when the promise is resolved

//console.log(p);
