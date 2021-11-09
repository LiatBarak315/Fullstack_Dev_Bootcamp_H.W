function countryToLiveIn(language, isIsland, population, country) {
  if (language == "english" && isIsland === false && population < 50) {
    console.log("You should live in " + country);
  } else console.log(country+ " does not meet your criteria");
}
countryToLiveIn("english", false, 49, `u.s`);
countryToLiveIn("English", false, 40, `china`);
countryToLiveIn("hebru", false, 49, `israel`);
