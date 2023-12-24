function thousandSeparator(number) {
  let nStr = number.toString();
  let [interPart, decimalPart = ""] = nStr.split(".");
  if (number < 0) {
    interPart = interPart.substring(1);
  }

  let formatStr = "";
  let count = 0;
  for (let i = 0; i < interPart.length; i++) {
    if (count === 3) {
      formatStr = `${formatStr},`;
      count = 0;
    }

    formatStr = `${formatStr}${interPart[i]}`;
    count++;
  }

  return (
    (number < 0 ? "-" : "") + formatStr + (decimalPart ? "." + decimalPart : "")
  );
}

console.log(thousandSeparator(-123456.123));
