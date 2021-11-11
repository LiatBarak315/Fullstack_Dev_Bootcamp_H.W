const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

var occurrences = array
  .join("")
  .toLowerCase()
  .split("")
  .reduce(function (o, e) {
    return (o[e] = (o[e] || 0) + 1), o;
  }, {});
console.log(occurrences);
