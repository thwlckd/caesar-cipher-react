import { alphabetRe, exceptReg } from '../constance/regularExpress.js';
import { words } from '../constance/words.js';

const shiftMsg = (key, msg) => {
  if (key < 0) return shiftMsg(key + 26, msg);

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

  return encryptedMsg.join('');
};

const countValidWords = (key, msg) => {
  const shiftedWords = shiftMsg(key, msg).split(' ');
  const count = shiftedWords.filter((word) =>
    words.includes(word.toLowerCase().replace(exceptReg, ''))
  ).length;

  return { count, shifedMsg: shiftedWords.join(' ') };
};

const decryptMsg = (msg) => {
  const decryptedData = { count: 0, message: '' };
  for (let i = 0; i < 26; i++) {
    const { count, shifedMsg } = countValidWords(i, msg);
    if (decryptedData.count < count) {
      decryptedData.count = count;
      decryptedData.message = shifedMsg;
    }
  }

  if (
    decryptedData.count === 0 ||
    decryptedData.message.split(' ').lenght / 2 > decryptedData.count
  )
    return 'Not a valid sentence!';
  else return decryptedData.message;
};

export { shiftMsg, decryptMsg };
