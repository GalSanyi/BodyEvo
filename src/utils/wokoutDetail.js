import axios from "axios";
export const getChest = async () => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=chest`,
      {
        headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching chest exercises:", error.message);
    throw error;
  }
};

export const getBiceps = async () => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=biceps`,
      {
        headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching chest exercises:", error.message);
    throw error;
  }
};
