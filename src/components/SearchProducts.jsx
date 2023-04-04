import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchProducts({ products }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredProducts = () => {
    if (!searchValue) {
      return [];
    }
    return products.filter((product) => product['Наименование'].includes(searchValue));
  };

  return (
    <div className='search-products'>

      <TextField
        value={searchValue}
        label="Outlined"
        variant="outlined"
        onInput={(e) => setSearchValue(e.target.value)}
      />
      {searchValue}
      <Button variant="contained">
        <SearchIcon />
      </Button>

      <div className="">
        {filteredProducts().map((product, code) => (
          <p
            className='product-item p-3'
            key={product['Код']}
          >
            <b>{ code }:</b>
            { product['Наименование'] }
            <i>{ product['Цена'] }руб</i>
            <i>{ product['Остаток'] }шт.</i>
          </p>
        ))}
      </div>
    </div>
  )
}
