function canConstruct(ransomNote, magazine) {
  let map = new Map();
  for (let char of magazine) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let char of ransomNote) {
    if (!map.has(char) || map.get(char) <= 0) return false;
    map.set(char, map.get(char) - 1);
  }
  return true;
}

function canConstruct1(ransomNote, magazine) {
  const count = new Array(26).fill(0);

  for(let char of magazine) {
    count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  for(let char of ransomNote) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
    if(count[index] === 0) return false;
    count[index]--;
  }

  return true;
}