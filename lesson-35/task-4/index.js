//algo

//1. Edit func parseUser with jsonString argument
//2. Edit block try - catch
//3. Edit parser in block try
//4. if parse done return result
//5. Edit block catch return null

export const parseUser = jsonString => {
  try {
    const jsonObj = JSON.parse(jsonString);
    return jsonObj;
  } catch (error) {
    return null;
  }
};
