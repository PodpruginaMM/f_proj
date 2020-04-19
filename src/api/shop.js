/**
 * Mocking client-server processing
 */
const products = [
  {
    id: 124,
    title: 'Black stylish hoody',
    price: 52,
    img_name: 'Layer_43',
    inventory: 100,
  },
  {
    id: 457,
    title: 'Black men coat',
    price: 67,
    img_name: 'Layer_44',
    inventory: 100,
  },
  {
    id: 123,
    title: 'Gray eye T-shirt',
    price: 44,
    img_name: 'Layer_45',
    inventory: 100,
  },
  {
    id: 456,
    title: 'Blue square on black hoody',
    price: 122,
    img_name: 'Layer_46',
    inventory: 100,
  },
  {
    id: 457,
    title: 'Funny blue hat',
    price: 37,
    img_name: 'Layer_48',
    inventory: 100,
  },
  {
    id: 459,
    title: 'Bay white T-shirt',
    price: 55,
    img_name: 'Layer_2',
    inventory: 100,
  },
  {
    id: 460,
    title: 'Mango open shoulders',
    price: 89,
    img_name: 'Layer_3',
    inventory: 100,
  },
  {
    id: 461,
    title: 'Beard white backpack',
    price: 121,
    img_name: 'Layer_4',
    inventory: 100,
  },
  {
    id: 462,
    title: 'Flowers woman T-shirt',
    price: 77,
    img_name: 'Layer_5',
    inventory: 100,
  },
  {
    id: 463,
    title: 'Striped jacket for whity',
    price: 203,
    img_name: 'Layer_6',
    inventory: 100,
  },
  {
    id: 463,
    title: 'Exclusive beige leggins',
    price: 112,
    img_name: 'Layer_8',
    inventory: 100,
  },
  {
    id: 458,
    title: 'Bomber jacket black',
    price: 169,
    img_name: 'Layer_49',
    inventory: 100,
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(products), 100);
  },
};
