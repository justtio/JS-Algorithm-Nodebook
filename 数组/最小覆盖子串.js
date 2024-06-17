function minWindow(s, t) {
  let need = new Map(); // Map to store the characters and their frequencies in string t
  let window = new Map(); // Map to store the characters and their frequencies in the sliding window
  for (let c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1); // Count the frequency of each character in string t
  }
  let left = 0, right = 0; // Pointers to track the left and right boundaries of the sliding window
  let valid = 0; // Counter to keep track of the number of characters in the sliding window that match the characters in string t
  let start = 0, len = Infinity; // Variables to store the starting index and length of the minimum window substring
  while (right < s.length) {
    let c = s[right]; // Current character at the right pointer
    right++; // Move the right pointer to the right
    if (need.has(c)) {
      window.set(c, window.has(c) ? window.get(c) + 1 : 1); // Add the character to the sliding window and update its frequency
      if (window.get(c) === need.get(c)) {
        valid++; // If the frequency of the character in the sliding window matches the frequency in string t, increment the valid counter
      }
    }
    while (valid === need.size) {
      if (right - left < len) {
        start = left; // Update the starting index of the minimum window substring
        len = right - left; // Update the length of the minimum window substring
      }
      let d = s[left]; // Current character at the left pointer
      left++; // Move the left pointer to the right
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--; // If the frequency of the character in the sliding window becomes less than the frequency in string t, decrement the valid counter
        }
        window.set(d, window.get(d) - 1); // Remove the character from the sliding window and update its frequency
      }
    }
  }
  return len === Infinity ? "" : s.substr(start, len); // Return the minimum window substring or an empty string if no such substring exists
}

const s = "ADOBECODEBANC";
const t = "ABC";
const result = minWindow(s, t); // Output: "BANC"