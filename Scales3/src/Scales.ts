import IStorageEngine from './IStorageEngine';
import Product from './Product';

export default class Scales<StorageEngine extends IStorageEngine> {
  private storage: StorageEngine;

  constructor(classRef) {
    this.storage = uniFactory(classRef);
  }

  public add(product: Product): void {
    this.storage.addItem(product);
  }

  public getSumScale(): number {
    let scale: number = 0;
    for (let i: number = 0; i < this.storage.getCount(); i++) {
      scale += this.storage.getItem(i).getScale();
    };
    return scale;
  }

  public getNameList(): Array<string> {
    const nameList: Array<string> = [];
    for (let i: number = 0; i < this.storage.getCount(); i++) {
      nameList.push(this.storage.getItem(i).getName());
    };
    return nameList;
  }
}

function uniFactory<objtype>(classRef: { new(): objtype; }): objtype {
  return new classRef();
}