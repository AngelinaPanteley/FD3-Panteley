import Product from './Product';
import IStorageEngine from './IStorageEngine';

export default class ScalesStorageEngineArray implements IStorageEngine {
  private array: Array<Product> = [];

  addItem(item: Product): void {
    this.array.push(item);
  };

  getItem(index: number): Product {
    return this.array[index];
  };

  getCount(): number {
    return this.array.length;
  };
}