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
      let l = map.get(s[i]);
      map.set(s[i], l - 1);
      if (l === 0) {
        charCount--;
      }
    }

    while (charCount === 0) {
      if (i - j < minLen) {
        minLen = i - j;
        result = s.slice(j, i);
      }

      if (map.has(s[j])) {
        let l = map.get(s[j]);
        map.set(s[j], l + 1);

        if (l > 0) {
          charCount++;
        }
      }

      j++;
    }
  }
  
  return result;
};

console.log(minWindow("window", "ow"));
