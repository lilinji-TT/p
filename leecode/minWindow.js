/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let result = "";
  let minLen = Infinity;
  const map = new Map();

  for (const s of t) {
    map.set(s, (map.get(s) || 0) + 1);
  }

  let charCount = map.size;

  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) - 1);
      if (map.get(s[i]) === 0) {
        charCount--;
      }
    }

    while (charCount === 0) {
      if (i - j < minLen) {
        minLen = i - j;
        result = s.slice(j, i + 1);
      }

      if (map.has(s[j])) {
        map.set(s[j], map.get(s[j]) + 1);

        if (map.get(s[j]) > 0) {
          charCount++;
        }
      }

      j++;
    }
  }

  return result;
};

console.log(minWindow("adobecodebanc", "abc"));
