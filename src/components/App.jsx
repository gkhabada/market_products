import { useState, useEffect } from 'react'

import api from '../service';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import SearchProducts from './SearchProducts';
import ScannerCode from './ScannerCode';
import ProductsByCategories from './ProductsByCategories';
import LoadingComponent from './LoadingComponent';
import LoadingSkeleton from './LoadingSkeleton';

function App() {
  const [products, setProducts] = useState([]);
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    const response = await api.fetchFileFromYandex();
    // const response = await api.fetchXmlFile();
    setProducts(response);
    setLoading(false);
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

        {/* <LoadingComponent state={loading} /> */}
        <LoadingSkeleton state={loading} />


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
