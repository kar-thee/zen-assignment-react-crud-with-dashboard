import axios from "axios";

const EditData = async (id) => {
  try {
    const data = await axios.put(
      `https://616e4ec9a83a850017caa908.mockapi.io/userData/${id}`
    );
    return data;
  } catch (e) {
    console.log("error", e.message);
  }
};

export default EditData;
