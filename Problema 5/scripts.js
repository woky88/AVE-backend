window.onload = function () {
  var passwordInput = document.getElementById('password');
  passwordInput.oninput = function () {
    var password = passwordInput.value;
    var checks = [
      [checkLength, 'length'],
      [checkCase, 'case'],
      [checkNoRepeatedLetters, 'no-repeated-letters'],
      [checkNumbers, 'numbers'],
      [checkNoRepeatedNumbers, 'no-repeated-numbers'],
      [checkSpecialChars, 'special-chars'],
      [checkNoZero, 'no-zero'],
      [checkNoSpaces, 'no-spaces']
    ];

    if (password === '') {
      checks.forEach(function ([_, id]) {
        document.getElementById(id).className = 'invalid';
      });
    } else {
      checks.forEach(function ([check, id]) {
        document.getElementById(id).className = check(password) ? 'valid' : 'invalid';
      });
    }
  }
}

function checkLength(password) {
  return password.length >= 16;
}

function checkCase(password) {
  return (password.toLowerCase() != password) && (password.toUpperCase() != password);
}

function checkNoRepeatedLetters(password) {
  let lowerCasePassword = password.toLowerCase();
  for (let i = 0; i < lowerCasePassword.length - 1; i++) {
    if (lowerCasePassword[i] === lowerCasePassword[i + 1]) {
      return false;
    }
  }
  return true;
}

function checkNumbers(password) {
  let numbersCount = (password.match(/[1-9]/g) || []).length;
  return numbersCount >= 4;
}

function checkNoRepeatedNumbers(password) {
  let numbers = password.match(/[1-9]/g);
  if (numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] === numbers[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

function checkSpecialChars(password) {
  const specialChars = "!@#$%^&*-_=+?";
  let charsFound = 0;
  let previousIndex = -1;
  for (let i = 0; i < specialChars.length; i++) {
    let index = password.indexOf(specialChars[i]);
    if (index !== -1) {
      charsFound++;
      if (previousIndex === index - 1) {
        return false;
      }
      previousIndex = index;
    }
  }
  return charsFound >= 2;
}

function checkNoZero(password) {
  return !password.includes('0');
}

function checkNoSpaces(password) {
  return !password.includes(' ');
}
