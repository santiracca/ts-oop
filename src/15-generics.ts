import axios from 'axios';
import { Category } from './app/models/category.model';
import { Product } from './app/models/product.model';

function getValue<T>(value: T) {
  return value;
}

export class BaseHttpService<TypeClass> {
  constructor(private url: string) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update<T, E>(id: T, changes: E) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

const url1 = 'https://api.escuelajs.co/api/v1/products';
const url2 = 'https://api.escuelajs.co/api/v1/categories';
const productService = new BaseHttpService<Product>(url1);
const categoryService = new BaseHttpService<Category>(url2);
const myAss = 'ass for grass';
