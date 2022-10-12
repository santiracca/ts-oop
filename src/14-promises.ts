import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1/products';
(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get(BASE_URL);
    return promise;
  }

  async function getProductsAsync() {
    const rta = await axios.get(BASE_URL);
    return rta.data;
  }

  const rta = await delay(3000);
  console.log(rta);
  const products = await getProducts();
  console.log(products);
})();
