function uniqueArray(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let flag = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      result.push(arr1[i]);
    }
  }
  return result;
}

function isPrimitive(val) {
  return val === null || !["object", "function"].includes(typeof val);
}
function equals(val1, val2) {
  if (isPrimitive(val1) || isPrimitive(val2)) {
    return Object.is(val1, val2);
  }

  const e1 = Object.entries(val1);
  const e2 = Object.entries(val2);

  if (e1.length !== e2.length) {
    return false;
  }

  for (const [key, value] of e1) {
    if (!equals(value, val2[key])) {
      return false;
    }
  }

  return true;
}

console.log(equals({ a: 1, b: 3 }, { a: 1, b: 2 }));
