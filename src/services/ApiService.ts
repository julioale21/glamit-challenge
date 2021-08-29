import axios from "axios";

const apiURL = "https://glamit-challenge.herokuapp.com/products";

class ApiService {
  public static async fetchProducts() {
    const response = await axios.get(apiURL);

    return response.data;
  }
}

export default ApiService;
