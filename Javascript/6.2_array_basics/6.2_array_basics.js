const people = ["Greg", "Mary", "Devon", "James"];
//1
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  //2
  if (people[i] === "Greg") {
    people.splice(i, 1);
    i--;
  }
  //3
  if (people[i] === "James") {
    people.splice(i, 1);
    i--;
  }
}
console.log(people);
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
//10 miss the Redefine part לא עובד
const arr2 = people.splice(3, 1, "Elizabeth", "Artie");
console.log(arr2);
//11
