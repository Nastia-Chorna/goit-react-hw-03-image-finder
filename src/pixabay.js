import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api/";
const KEY = "24426317-0934d3933860248e2f67d0ecb";

async function fetchPictures(name, page = 1) {
  try {
    const response = await axios.get(
      `?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchPictures;