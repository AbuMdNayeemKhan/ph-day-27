let mydata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//get elements by elements
// console.log(mydata[3]);

//change data by using index
mydata[1] = 22;
// console.log(mydata);

//push a single data on that array
mydata.push(11);
// console.log(mydata);

//pup a data
mydata.pop();
// console.log(mydata);

//shift unshift
// mydata.shift();
// console.log(mydata);

//includes
mydata.includes(22);
// console.log(mydata.includes(22));

//indexOf
console.log(mydata.indexOf(22));

//is array

console.log(Array.isArray(mydata));