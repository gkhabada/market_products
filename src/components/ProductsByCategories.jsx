import { useState, useEffect } from 'react'
import { sortByCategories } from '../utils'
import '../styles/products-by-categories.css'

import ProductsTable from './ProductsTable';

export default function ProductsByCategories({ products }) {
  const [categories, setCategories] = useState([]);
  const [expandedPanel, setExpandedPanel] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedPanel(id === expandedPanel ? null : id);
  };

  const activeCategory = (category) => (expandedPanel === category['Код']);

  useEffect(() => {
    setCategories(sortByCategories(products));
  }, [products]);

  return (
    <div className='accordion'>
      {
        categories.map((category) => (
          <div
            className={`accordion__item ${ activeCategory(category) ? 'accordion__item--active' : '' }`}
            key={category['Код']}
          >
            <button
              className='accordion__title'
              onClick={() => toggleAccordion(category['Код'])}
            >
              <span>{category['Наименование']}</span>
              <span className='material-icons accordion__title_icon'>expand_more</span>
            </button>
            {
              activeCategory(category) &&
                <div className='accordion__content'>
                  <ProductsTable products={category.products} />
                </div>
            }
          </div>
        ))
      }
    </div>
  )
}
