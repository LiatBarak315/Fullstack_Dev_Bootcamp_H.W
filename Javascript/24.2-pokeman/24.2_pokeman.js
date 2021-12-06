function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}
const p1 = new Pokemon("Kyogre", "water", [
  "Waterfall",
  "Hydro Pump",
  "Blizzard",
  "Thunder",
]);
const p2 = new Pokemon("taga","mut",[
    "Waterfall",
    "Hydro Pump",
    "Blizzard",
    "Thunder",
  ]);
const p3 = new Pokemon("tali","tal",[
    "Waterfall",
    "Hydro Pump",
    "Blizzard",
    "Thunder",
  ]);
Pokemon.prototype.callPokemon = function () {
  console.log("I choose you " + this.name);
};

Pokemon.prototype.attack = function (num) {
  console.log(this.name + " used " + this.attackList[num]);
};
p1.callPokemon();
p1.attack(0);
p3.callPokemon();
p3.attack(1);