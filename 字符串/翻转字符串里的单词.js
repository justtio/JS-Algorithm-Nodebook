function reverseWords(s) {
  const newStr = s.split(' ').reverse().join(' ')
  // remove extra empty space
  return newStr.replace(/\s+/g, ' ').trim();
}

function reverseWords1(s) {
  const sArr = s.split(' ');
  //remove extra empty space
  const res = [];
  for(let i = 0; i < sArr.length; i++) {
    if(sArr[i] !== '') {
      res.push(sArr[i]);
    } 
  }
  // reverse the array
  return res.reverse().join(' ');
}