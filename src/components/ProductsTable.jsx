import { useMemo } from 'react';
import '../styles/products-table.css';

export default function ProductsTable({ products = [] }) {
  const sortedProducts = useMemo(() => {
    return products.sort((a, b) => a['Наименование'] > b['Наименование'] ? 1 : -1);
  }, [products]);

  return (
    <div className='products-table'>
      <table cellSpacing='0' cellPadding='0'>
        <thead>
          <tr>
            <th>№</th>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Количество</th>
          </tr>
        </thead>
        <tbody>
        {sortedProducts.map((product, index) => (
            <tr key={product['Код']}>
              <td>{index + 1}</td>
              <td>{product['Наименование']}</td>
              <td>{product['Цена']} <span>₽</span></td>
              <td>{product['Остаток']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
