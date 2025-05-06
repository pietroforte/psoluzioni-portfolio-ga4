export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  source: 'SAP' | 'Shopify' | 'Mirakl' | 'SFCC' | 'Adobe' | 'Oracle';
}

export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'SAP Advanced Router',
    price: 1299,
    image: '/images/sap-router.jpg',
    source: 'SAP'
  },
  {
    id: 'p2',
    name: 'Shopify Coffee Grinder',
    price: 89,
    image: '/images/shopify-grinder.jpg',
    source: 'Shopify'
  },
  {
    id: 'p3',
    name: 'Mirakl Mountain Bike',
    price: 799,
    image: '/images/mirakl-bike.jpg',
    source: 'Mirakl'
  },
  {
    id: 'p4',
    name: 'Salesforce Headphones',
    price: 199,
    image: '/images/sfcc-headphones.jpg',
    source: 'SFCC'
  },
  {
    id: 'p5',
    name: 'Adobe Pro Camera',
    price: 499,
    image: '/images/adobe-camera.jpg',
    source: 'Adobe'
  },
  {
    id: 'p6',
    name: 'Oracle Smartwatch',
    price: 249,
    image: '/images/oracle-smartwatch.jpg',
    source: 'Oracle'
  },
  {
    id: 'p7',
    name: 'Oracle Loyalty Training Course',
    price: 599,
    image: '/images/oracle-course.jpg',
    source: 'Oracle'
  }
];
