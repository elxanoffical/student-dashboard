export async function GET() {
  const products = [
      {
        id: 1,
        vendor: 'Apple',
        model: 'iPhone 13',
        color: 'red',
        sellCount: 13,
        stock: 12,
        price: 1000,
      },
      {
        id: 2,
        vendor: 'Lenovo',
        model: 'ThinkPad X1',
        color: 'black',
        sellCount: 13,
        stock: 12,
        price: 2000,
      },
      {
        id: 3,
        vendor: 'Samsung',
        model: 'Galaxy S21',
        color: 'blue',
        sellCount: 13,
        stock: 12,
        price: 900,
      },
      {
        id: 4,
        vendor: 'Dell',
        model: 'XPS 15',
        color: 'silver',
        sellCount: 8,
        stock: 20,
        price: 2500,
      },
      {
        id: 5,
        vendor: 'HP',
        model: 'Spectre x360',
        color: 'gray',
        sellCount: 10,
        stock: 15,
        price: 1800,
      },
      {
        id: 6,
        vendor: 'Google',
        model: 'Pixel 6',
        color: 'white',
        sellCount: 20,
        stock: 5,
        price: 700,
      },
  ];

  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' },
  });
}