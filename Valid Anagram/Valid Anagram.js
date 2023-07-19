/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const charFrequency = {};
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charFrequency[char] = charFrequency[char] + 1 || 1;
    }
  
  
    for (let i = 0; i < t.length; i++) {
      const char = t[i];
      if (!charFrequency[char]) {
        return false;
      }
      charFrequency[char]--;
    }
  
    return true;
  };