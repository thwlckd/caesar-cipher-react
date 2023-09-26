const alphabetRe = /[a-z]/i;

const caesarCipher1 = (key, msg) => {
  if (key < 0) return caesarCipher1(key + 26, msg);

  const encryptedMsg = [...msg].map((char) => {
    if (alphabetRe.test(char)) {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90)
        return String.fromCharCode(((code - 65 + key) % 26) + 65);
      else if (code >= 97 && code <= 122)
        return String.fromCharCode(((code - 97 + key) % 26) + 97);
    }
    return char;
  });

  return encryptedMsg;
};

export { caesarCipher1 };
