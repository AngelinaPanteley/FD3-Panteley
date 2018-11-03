class Scales {
  private productArray: Array<Product> = [];

  public add(product: Product) {
    this.productArray.push(product);
  }

  public getSumScale(): number {
    let scale: number = 0;
    this.productArray.forEach((elem: Product) => {
      scale += elem.getScale();
    });
    return scale;
  }

  public getNameList(): Array<string> {
    const nameList: Array<string> = [];
    this.productArray.forEach((elem: Product) => {
      nameList.push(elem.getName());
    });
    return nameList;
  }
}

interface Product {
  getScale(): number;
  getName(): string;
}

class Apple implements Product {
  private scale: number;
  private name: string;

  constructor(_name: string, _scale: number) {
    this.name = _name;
    this.scale = _scale;
  }

  public getScale(): number {
    return this.scale;
  }

  public getName(): string {
    return this.name;
  }
}

class Tomato implements Product {
  private scale: number;
  private name: string;

  constructor(_name: string, _scale: number) {
    this.name = _name;
    this.scale = _scale;
  }

  public getScale(): number {
    return this.scale;
  }

  public getName(): string {
    return this.name;
  }
}

const scale: Scales = new Scales();

scale.add(new Apple('яблоко 1', 20));
scale.add(new Tomato('помидор 1', 30));
scale.add(new Apple('яблоко 2', 50));
scale.add(new Tomato('помидор 2', 40));
scale.add(new Apple('яблоко 3', 70));
scale.add(new Tomato('помидор 3', 30));
scale.add(new Apple('яблоко 4', 90));
scale.add(new Tomato('помидор 4', 20));
scale.add(new Apple('яблоко 5', 60));
scale.add(new Tomato('помидор 5', 30));

console.log('Список названий', scale.getNameList());
console.log('Итоговый вес', scale.getSumScale());