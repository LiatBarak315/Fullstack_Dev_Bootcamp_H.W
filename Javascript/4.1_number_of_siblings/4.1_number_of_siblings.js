let numSiblings = prompt("How many siblings do you have?");

if (numSiblings === Number(1)) {
  alert(numSiblings + " Sibling!");
}   else if(numSiblings >= 1){
        alert('More than 1 sibling');
    }
        else alert('No siblings');