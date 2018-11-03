import Product from './Product';
import IStorageEngine from './IStorageEngine';

export default class ScalesStorageEngineLocalStorage implements IStorageEngine {
  private localStorage: Storage = localStorage;

  addItem(item: Product): void {
    const length: number = this.getCount();
    this.localStorage.setItem(length.toString(), JSON.stringify(item));
  };

  getItem(index: number): Product {
    const product = JSON.parse(this.localStorage.getItem(index.toString()));
    return new Product(product.name, product.scale);
  };

  getCount(): number {
    return this.localStorage.length;
  };
}