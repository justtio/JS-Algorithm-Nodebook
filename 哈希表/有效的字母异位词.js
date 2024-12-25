function isAnagram(s, t) {
  if(s.length !== t.length) return;
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if(sMap[s[i]] !== tMap[s[i]]) return false;
  }
  return true;
}

function isAnagram(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}