import axios from "axios";

export const uploadImage = async (imgFile) => {
  // create new form
  const formData = new FormData();
  // append imgFile into formData
  formData.append("image", imgFile);
  // host the image
  const { data } = await axios.post(import.meta.env.VITE_HOSTING_URL, formData);
  return data?.data?.url;
};
