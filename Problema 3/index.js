function validatePassword(password) {
  let hasLower = false;
  let hasUpper = false;
  let numCount = 0;
  let specialCount = 0;
  let specialChars = new Set();
  let lastCharType = '';

  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    let currentCharType = '';

    if (char >= 'a' && char <= 'z') {
      hasLower = true;
      currentCharType = 'lowercase';
    } else if (char >= 'A' && char <= 'Z') {
      hasUpper = true;
      currentCharType = 'uppercase';
    } else if (char >= '1' && char <= '9') {
      numCount++;
      currentCharType = 'number';
    } else if ('!@#$%^&*-_+=?'.includes(char)) {
      if (specialChars.has(char)) return false;
      specialCount++;
      specialChars.add(char);
      currentCharType = 'special';
    } else {
      return false;
    }


    if (currentCharType === lastCharType) return false;
    lastCharType = currentCharType;
  }

  return password.length >= 16 && hasLower && hasUpper && numCount >= 4 && specialCount >= 2;
}

console.log(validatePassword("Aa1@Bb2#Cc3$Dd4%"));
console.log(validatePassword("InvalidPassword")); 
