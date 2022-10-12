import axios from 'axios';
import { Product } from './models/product.model';

const BASE_URL = 'https://api.escuelajs.co/api/v1/products';
(async () => {
  async function getProducts() {
    const rta = await axios.get<Product[]>(BASE_URL);
    return rta.data;
  }
  const products = await getProducts();
  console.log(products);
})();
