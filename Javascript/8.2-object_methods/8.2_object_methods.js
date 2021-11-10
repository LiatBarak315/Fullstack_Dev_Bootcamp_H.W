const mycountry = {
  country: "Israel",
  capital: "Jerusalem",
  language: "Hebrew",
  population: 9.217,
  neighbours: ["Jordan", "Lebanon", "Egypt", "Syria"],
  describe: function () {
    return (
      this.country +
      " has " +
      this.population +
      " million people, their mother tongue is " +
      this.language +
      " they have " +
      this.neighbours.length +
      " neighbouring countries and a capital called " +
      this.capital
    );
  },
  checkIsland: function(){
  return this.neighbours.length>1?mycountry['Island'] = false:true;
}
};
console.log(mycountry.describe());
console.log(mycountry.checkIsland());
