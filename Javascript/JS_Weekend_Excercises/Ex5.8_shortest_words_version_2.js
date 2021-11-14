const findShort = (n) => {
  let words = n.split(" ");
  let wordL = words.map((x) => x.length);
  let maxI = Math.max(...wordL);
  const result = [];
  for (let i = 0; i != words.length; i++) {
    if (wordL[i] == maxI) result.push(words[i]);
  }
  return result;
};

console.log(findShort("anan aaa aaa snsn zz rr rer"));
