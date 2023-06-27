import { useState, useEffect } from 'react'

import api from '../service';
import '../styles/app.css'

import SearchProducts from './SearchProducts';
import ScannerCode from './ScannerCode';
import ProductsByCategories from './ProductsByCategories';
import LoadingSkeleton from './LoadingSkeleton';

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const [tabsList] = useState([
    { id: 1, text: 'Товары по категориям', icon: 'format_list_bulleted' },
    { id: 2, text: 'Поиск товара', icon: 'search' },
    { id: 3, text: 'Сканировать штрих код', icon: 'qr_code_scanner' },
  ]);
  const [tab, setTab] = useState(1);

  const getProducts = async () => {
    setLoading(true);
    // const response = await api.fetchFileFromYandex();
    const response = await api.fetchXmlFile();
    setProducts(response);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <div className="tabs__wrapper">
        <div className='tabs'>
          {
            tabsList.map(({ id, text, icon }) => (
              <button
                className={`tabs__item ${ tab === id ? 'tabs__item--active' : '' }`}
                key={id}
                onClick={() => setTab(id)}
              >
                <span className='material-icons'>{icon}</span>
                <span className='tabs__item_text'>{text}</span>
              </button>
            ))
          }
        </div>
      </div>

      <LoadingSkeleton state={loading} />

      <div role="tabpanel">
        { tab == 1 && <ProductsByCategories products={products} /> }
        { tab == 2 && <SearchProducts products={products} /> }
        { tab == 3 && <ScannerCode products={products} /> }
      </div>
    </div>
  )
}

export default App
