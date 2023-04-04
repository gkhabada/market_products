import { useState, useEffect } from 'react'
import { sortByCategories } from '../utils'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProductsTable from './ProductsTable';

export default function ProductsByCategories({ products }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(sortByCategories(products));
  }, [products]);

  // console.log(products);

  return (
    <div className='product-accordion'>
      {
        categories.map((category) => (
          <Accordion key={category['Код']}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{category['Наименование']}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ProductsTable products={category.products} />
            </AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  )
}
