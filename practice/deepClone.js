function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const result = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }

  return result;
}
