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
    console.error("Error fetching biceps exercises:", error.message);
    throw error;
  }
};
export const getTriceps = async () => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=triceps`,
      {
        headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching triceps exercises:", error.message);
    throw error;
  }
};
export const getCalves = async () => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=calves`,
      {
        headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching triceps exercises:", error.message);
    throw error;
  }
};

export const getGlute = async () => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=glutes`,
      {
        headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching triceps exercises:", error.message);
    throw error;
  }
};

export const getAbs = async () => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=abdominals`,
      {
        headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching triceps exercises:", error.message);
    throw error;
  }
};
export const getBack = async () => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=middle_back`,
      {
        headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching triceps exercises:", error.message);
    throw error;
  }
};
export const getForearm = async () => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=forearms`,
      {
        headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching triceps exercises:", error.message);
    throw error;
  }
};
export const getShoulder = async () => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=neck`,
      {
        headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching triceps exercises:", error.message);
    throw error;
  }
};
export const getLegs = async () => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=hamstrings`,
      {
        headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching triceps exercises:", error.message);
    throw error;
  }
};
export const getLats = async () => {
  try {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/exercises?muscle=lats`,
      {
        headers: { "X-Api-Key": process.env.REACT_APP_API_KEY },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching triceps exercises:", error.message);
    throw error;
  }
};
