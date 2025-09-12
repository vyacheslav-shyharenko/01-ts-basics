interface Prodduct {
  readonly id: number;
  title: string;
  description: string;
}

const product: Prodduct = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
