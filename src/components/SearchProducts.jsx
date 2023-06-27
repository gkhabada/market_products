import { useState } from 'react'
import '../styles/search-products.css';
import ProductsTable from './ProductsTable';

export default function SearchProducts({ products }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredProducts = () => {
    if (!(searchValue && searchValue.length >= 2)) {
      return [];
    }
    return products.filter((product) => product['Наименование'].includes(searchValue));
  };

  return (
    <div className='search-products'>
      <input
        value={searchValue}
        placeholder="Введите название товара"
        autoFocus
        onInput={(e) => setSearchValue(e.target.value)}
      />

      {
        filteredProducts().length
        ? <ProductsTable products={filteredProducts()} />
        : <p className='search-products__not-found'>Нет соответствующих товаров</p>
      }
    </div>
  )
}
