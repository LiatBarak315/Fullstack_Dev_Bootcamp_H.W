//start page
const s = document.querySelector("button");
const ss = document.querySelector(".start");
const c = document.getElementById("bd").style;
s.addEventListener("click", function () {
  ss.style.visibility = "hidden";
  c.visibility = "visible";
});
//bord
const randomize = () => Math.floor(Math.random() * 5);
const classes = ["sky", "tree", "leaf", "ground", "stone", "grass"];
const board = document.querySelector(".board");
console.log(classes[5]);
const tree = [
  { x: 19, y: 19 },
  { x: 18, y: 19 },
  { x: 17, y: 19 },
  { x: 16, y: 19 },
];
const leaf = [
  { x: 15, y: 18 },
  { x: 15, y: 19 },
  { x: 15, y: 20 },
  { x: 14, y: 18 },
  { x: 14, y: 19 },
  { x: 14, y: 20 },
  { x: 13, y: 18 },
  { x: 13, y: 19 },
  { x: 13, y: 20 },
];
const stone = [
  { x: 19, y: 5 },
  { x: 19, y: 6 },
  { x: 18, y: 6 },
];
function setGrid() {
  for (let i = 1; i <= 25; i++) {
    for (let j = 1; j <= 25; j++) {
      if (i === 21) newElement(classes[5], j, i);
      else if (i > 21) newElement(classes[3], j, i);
      else newElement(classes[0], j, i);
    }
  }
}

function newElement(cls, i, j) {
  const el = document.createElement("div");
  el.classList.add(`${cls}`);
  el.style.gridColumnStart = i;
  el.style.gridRowStart = j;
  board.appendChild(el);
}

function drawElemnt(element, cls) {
  element.forEach((el) => {
    const index = el.x * 25 + el.y;
    //take x,y from grid
    //change div's class to cls
    const child = board.children[index];

    //get current lass list and remove it
    const removeClass = child.classList.value;
    // console.log(removeClass);
    child.classList.toggle(removeClass);
    child.classList.toggle(cls);
  });
}
setGrid();
drawElemnt(tree, "tree");
drawElemnt(leaf, "leaf");
drawElemnt(stone, "stone");

const toolBox = document.getElementById("tools");
let selectTool = "";
const Shovel = document.getElementById("shovel");
const Picaxe = document.getElementById("picaxe");
const Axe = document.getElementById("axe");
Shovel.addEventListener("click", (event) => {
  selectTool = "shovel";
});
Picaxe.addEventListener("click", (event) => {
  selectTool = "picaxe";
});
Axe.addEventListener("click", (event) => {
  selectTool = "axe";
});
const Save = document.getElementById("saver");
board.addEventListener("click", (event) => {
  switch (selectTool) {
    case "axe":
      if (
        event.target.classList.value === "tree" ||
        event.target.classList.value === "leaf"
      ) 
        removeElement(event.target);
        // console.log(event.target.classList.value);
      break;
    case "picaxe":
      if (event.target.classList.value === "stone") 
        removeElement(event.target);
      break;
    case "shovel":
      if (
        event.target.classList.value === "ground" ||
        event.target.classList.value === "grass"
      )
        removeElement(event.target);
      break;
  }
  if (Save.classList.value&&saveon && event.target.classList.value === "sky") {
    event.target.classList.value = Save.classList.value;
    saveon = false;
    Save.classList.value = "";
    selectTool = "";
  }
});
let saveon = false;
Save.addEventListener("click", (event) => {
  saveon = true;
  selectTool = "";
});
function removeElement(element) {
  Save.classList = "";
  Save.classList.add(element.classList.value);
  element.classList.value = "";
  element.classList.value = "sky";
}
