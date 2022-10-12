import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from './product.model';

export interface ProductService {
  getAll(): Product[] | Promise<Product[]>;
  create(data: CreateProductDto): Promise<Product> | Product;
  update(
    id: Product['id'],
    changes: UpdateProductDto
  ): Promise<Product> | Product;
  findOne(
    id: Product['id']
  ): Product | undefined | Promise<Product | undefined>;
}
