const arr = ["Life", "the", "universe", "and", "everything", "Answer"];
const Narr = (arr) => {
  let Nnarr = new Array();
  for (let i = 0; i < arr.length; i++) {
    Nnarr.push(arr[i].length);
  }
  console.log(Nnarr);
};
Narr(arr);
