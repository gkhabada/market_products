import { useState, useEffect } from 'react'
import '../styles/App.css'

import api from '../service';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import SearchProducts from './SearchProducts';
import ScannerCode from './ScannerCode';
import ProductsByCategories from './ProductsByCategories';

function App() {
  const [products, setProducts] = useState([]);
  const [tab, setTab] = useState(0);

  const getProducts = async () => {
    const response = await api.fetchFileFromYandex();
    // const response = await api.fetchXmlFile();
    setProducts(response);
  };

  useEffect(() => {
    getProducts();
}, []);

  return (
    <div className="App">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} aria-label="basic tabs example">
            <Tab label="Товары по категориям" />
            <Tab label="Поиск товара" />
            <Tab label="Сканировать штрих код" />
          </Tabs>
        </Box>
        <div role="tabpanel">
          { tab == 0 && <ProductsByCategories products={products} /> }
          { tab == 1 && <SearchProducts products={products} /> }
          { tab == 2 && <ScannerCode products={products} /> }
        </div>
      </Box>
    </div>
  )
}

export default App
