import axios from "axios";

const validateWord = async (word) => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (Array.isArray(response.data)) return true;
    else return false;
  } catch {
    return false;
  }
};

export { validateWord };
