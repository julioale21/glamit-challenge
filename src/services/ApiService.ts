import axios from "axios";

const apiURL = "http://localhost:8000/products";

class ApiService {
  public static async fetchProducts() {
    const response = await axios.get(apiURL);

    return response.data;
  }
}

export default ApiService;
