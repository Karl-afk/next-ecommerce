import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Joe',
      email: 'joe@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'jane@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4,
      numReviews: 4,
      countInStock: 20,
      description: 'A popular Shirt',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      price: 80,
      brand: 'Adidas',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular Shirt',
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/shirt3.jpg',
      price: 40,
      brand: 'Adidas',
      rating: 4.8,
      numReviews: 8,
      countInStock: 11,
      description: 'A popular Shirt',
    },
    {
      name: 'Golf Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
      price: 80,
      brand: 'Adidas',
      rating: 4.7,
      numReviews: 12,
      countInStock: 18,
      description: 'A popular Pants',
    },
  ],
};
export default data;
