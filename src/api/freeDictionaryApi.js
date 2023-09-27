import axios from "axios";

async function validateWord(word) {
  try {
    await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return true;
  } catch {
    return false;
  }
}

export { validateWord };
