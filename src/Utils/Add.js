export function add(input) {
  if (!input) return 0;
  const normalizedInput = input.replace(/\r\n/g, "\n");
  const extractNumbers = (numbersString, delimiterRegex) => {
    const numbersArray = numbersString
      .split(delimiterRegex)
      .map((num) => parseFloat(num));
    const negativeNumbers = numbersArray.filter((num) => num < 0);

    if (negativeNumbers.length > 0) {
      throw new Error(
        `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
      );
    }

    return numbersArray.filter((num) => !isNaN(num));
  };

  if (normalizedInput.startsWith("//")) {
    const delimiterLineEnd = normalizedInput.indexOf("\n");
    const delimiterPart = normalizedInput.slice(2, delimiterLineEnd);
    const delimiter =
      delimiterPart.startsWith("[") && delimiterPart.endsWith("]")
        ? delimiterPart.slice(1, -1)
        : delimiterPart;
    const numbersString = normalizedInput.slice(delimiterLineEnd + 1);
    const delimiterRegex = new RegExp(
      delimiter.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"),
      "g"
    );

    const numbers = extractNumbers(numbersString, delimiterRegex);
    return numbers.reduce((sum, num) => sum + num, 0);
  } else {
    const normalizedString = normalizedInput.replace(/\n/g, ",");
    const numbers = extractNumbers(normalizedString, /,/);
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

try {
  console.log(add("//;\n1;2"));
  console.log(add("//*\n1*2"));
  console.log(add("1,2\n3,-4"));
} catch (error) {
  console.error(error.message);
}
