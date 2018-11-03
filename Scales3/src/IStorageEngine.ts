import Product from './Product';

export default interface IStorageEngine {
  addItem(item: Product): void;
  getItem(index: number): Product;
  getCount(): number;
}