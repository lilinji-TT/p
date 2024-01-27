/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let result = "";
  if (s.length < t.length) return result;

  const map = new Map();

  for (const s of t) {
    map.set(s, (map.get(s) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {}
};
