function toPersianNumber(number) {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const numString = number.toString();
  let persianString = "";

  for (let i = 0; i < numString.length; i++) {
    const char = numString.charAt(i);
    if (!isNaN(char)) {
      persianString += persianNumbers[parseInt(char)];
    } else {
      persianString += char;
    }
  }

  return persianString;
}

document.addEventListener("DOMContentLoaded", function () {
  const inputElements = document.querySelectorAll("[id=inputNumber]");

  inputElements.forEach(function (inputElement) {
    inputElement.addEventListener("input", function (event) {
      const inputValue = event.target.value;
      const persianValue = toPersianNumber(inputValue);
      event.target.value = persianValue;
    });
  });
});
