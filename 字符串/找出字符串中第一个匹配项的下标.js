function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}

function buildNext(pattern) {
  const next = new Array(pattern.length).fill(0);
  let j = 0;
  for(let i = 1; i < pattern.length; i++) {
    while(j > 0 && pattern[i] !== pattern[j]) {
      j = next[j - 1];
    }

    if(pattern[i] === pattern[j]) {
      j++;
    }
    next[i] = j;
  }
  return next;
}

function kmpSearch(text, pattern) {
  if(pattern.length === 0) return 0;
  const next = buildNext(pattern);
  let j = 0;

  for(let i = 0; i < text.length; i++) {
    while(j > 0 && text[i] !== pattern[j]) {
      j = next[j - 1];
    }

    if(text[i] === pattern[j]) {
      j++;
    }

    if(j === pattern.length) {
      return i - j + 1;
    }
  }

  return -1;
}