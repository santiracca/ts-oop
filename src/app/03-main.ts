import { ProductHttpService } from './services/product-http.service';

(async () => {
  const productService = new ProductHttpService();

  try {
    console.log('--'.repeat(10));
    const products = await productService.getAll();
    console.log(products.length);

    const productId = products[0].id;
    await productService.update(productId, {
      price: 11000,
      title: 'nuevo titulo',
      description: 'nuevo nescrip',
    });
    const product = await productService.findOne(productId);
    console.log(product);
  } catch (error) {
    console.log(error);
  }
})();
