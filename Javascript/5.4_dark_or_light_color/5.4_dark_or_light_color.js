const color = (n) => {
  switch (n.toLowerCase()) {
    case "yellow":
    case "pink":
    case "orange":
      console.log("light color");
      break;
    case "blue":
    case "purple":
    case "brown":
      console.log("dark color");
      break;
    default:
      console.log("Unknown color");
  }
};
color("PInk");