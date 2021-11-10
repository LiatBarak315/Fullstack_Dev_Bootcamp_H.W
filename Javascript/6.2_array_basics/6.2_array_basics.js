const people = ["Greg", "Mary", "Devon", "James"];
//1
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
console.log(people);
//2
people.shift();
//3
people.pop();
//4
people.unshift("Matt");
console.log(people);
//5
people.push("liat");
console.log(people);
//6
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}
//7
const arr = people.slice(2);
console.log(arr);
//8
console.log(people.indexOf("Mary"));
//9
console.log(people.indexOf("Foo"));
//10
people.shift();
people.unshift("Greg");
people.pop();
people.push("James");
console.log(people);
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);
//11
const withBob=people.concat("Bob");
console.log(withBob);