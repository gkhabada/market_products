export const convertByObjKey = (key, products) => (
  products.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {})
);

export const sortByCategories = (products) => {
  const categories = products
    .filter((products) => (products['ЭтоГруппа'] === 'Да'))
    .sort((a, b) => (a['Наименование'] > b['Наименование'] ? 1 : -1))
    .map((category) => ({ ...category, products: [] }));
  categories.push({
    'Наименование': 'Без категории',
    'Код': '000000000000',
    products: [],
  });
  const categoriesByName = convertByObjKey('Наименование', categories);

  products.forEach((product) => {
    if (!product['Родитель']) {
      return;
    }

    if (categoriesByName[product['Родитель']]) {
      categoriesByName[product['Родитель']].products.push(product);
    } else {
      categoriesByName['Без категории'].products.push(product);
    }
  });

  const resultCategories = Object.values(categoriesByName).filter((category) => category.products.length);

  return resultCategories;
};

export default { convertByObjKey };
