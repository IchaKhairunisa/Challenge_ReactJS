export default function getAllProducts() {
    return [
      {
        id: 'E-ESP',
        slug: 'espresso-espresso',
        name: "Espresso",
        category: 'Espresso',
        price: 12_000,
        stock: 100,
        imageUrl: 'public/assets/images/Espresso.png',
        description: `Espresso is concentrated coffee made from high quality coffee beans, producing a strong taste and distinctive aroma that is appetizing. Suitable to enjoy at any time to provide an injection of energy and freshness. Every sip brings an unrivaled sensation of warmth and deliciousness.`
      },
      {
        id: 'IA-ESP',
        slug: 'iced-americano-espresso',
        name: "Iced Americano",
        category: 'Espresso',
        price: 18_000,
        stock: 10,
        imageUrl: `public/assets/images/IcedAmericano.png`,
        description: `Americano Ice is a perfect blend of strong espresso and cold water, served with ice cubes to provide a refreshing, refreshing sensation. Enjoy the strong and light taste of coffee with a cool touch that is ideal to accompany your activities throughout the day.`
      },
      {
        id: 'HL-ESP',
        slug: 'hot-latte-espresso',
        name: "Hot Latte",
        category: 'Espresso',
        price: 23_000,
        stock: 0,
        imageUrl: 'public/assets/images/Latte.png',
        description: `Hot Latte is the perfect combination of rich espresso and creamy hot milk, creating a smooth, creamy taste with every sip. Ideal for those of you who like coffee with a touch of comfortable warmth, suitable to be enjoyed at any time to calm your day.`
      },
  
    ]
  }