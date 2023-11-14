import axios from "axios";

export const getBreakfast = async () => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY2}&number=9&tags=breakfast`
    );
    return response.data.recipes;
  } catch (error) {
    console.error("Error fetching popular recipes:", error.message);
    throw error;
  }
};
export const getSnack = async () => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY2}&number=9&tags=breakfast`
    );
    return response.data.recipes;
  } catch (error) {
    console.error("Error fetching popular recipes:", error.message);
    throw error;
  }
};
export const getLunch = async () => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY2}&number=9&tags=lunch`
    );
    return response.data.recipes;
  } catch (error) {
    console.error("Error fetching popular recipes:", error.message);
    throw error;
  }
};
export const getDinner = async () => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY2}&number=9&tags=dinner`
    );
    return response.data.recipes;
  } catch (error) {
    console.error("Error fetching popular recipes:", error.message);
    throw error;
  }
};
