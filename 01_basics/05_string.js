const name = "Raj"
const rc = 50

console.log(name + rc + "Value");

console.log(`Hello my name is ${name} and my repo count is ${rc}`);

const gName = new String('hj-ui-op');
console.log(gName[0]);
console.log(gName.__proto__);
console.log(gName.length);

console.log(gName.toUpperCase());
console.log(gName.charAt(3));
const newString = gName.substring(0,4);
console.log(newString);

const newStrings = gName.slice(-5,4);
console.log(newStrings);

const newStringOne = " hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://raj.com/hitesh%20nandani"
console.log(url.replace('%20' ,'-'))

console.log(url.includes('sam'))
console.log(url.includes('nandani'))

console.log(gName.split('-'));

