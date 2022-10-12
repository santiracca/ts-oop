import axios from 'axios';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';
import { Product } from '../models/product.model';

export class ProductHttpService implements ProductService {
  private BASE_URL = 'https://api.escuelajs.co/api/v1/products';
  async getAll(): Promise<Product[]> {
    const { data } = await axios.get(this.BASE_URL);
    return data;
  }
  async create(dto: CreateProductDto) {
    const { data } = await axios.post(`${this.BASE_URL}`, dto);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto): Promise<Product> {
    const { data } = await axios.put(`${this.BASE_URL}/${id}`, changes);
    return data;
  }
  async findOne(id: Product['id']) {
    const { data } = await axios.get(`${this.BASE_URL}/${id}`);
    return data;
  }
}
