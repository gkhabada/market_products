import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
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
    <div className='search-products pt-3'>
      <TextField
        value={searchValue}
        label="Введите название товара"
        variant="filled"
        fullWidth
        autoFocus
        onInput={(e) => setSearchValue(e.target.value)}
      />
      {/* <Button
        variant="contained"
        size="medium"
      >
        <SearchIcon />
      </Button> */}

      {
        filteredProducts().length
        ? <ProductsTable products={filteredProducts()} />
        : <p className='text-center'>Нет соответствующих товаров</p>
      }
    </div>
  )
}
