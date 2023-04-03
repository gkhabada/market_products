import { useState, useEffect } from 'react'
import './App.css'

import api from '../service';
// import { convertByObjKey } from '../utils';

function App() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await api.fetchXmlFile();
    setProducts(response);
  };

  useEffect(() => {
    getProducts();
}, []);

  return (
    <div className="App">
      <div className="bg-slate-200">
        {products.map((product, code) => (
          <p
            className='product-item p-3'
            key={code}
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

export default App
