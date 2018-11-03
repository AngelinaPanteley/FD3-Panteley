class Product {
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

export default Product;
