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
  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  useEffect(() => {
    setCategories(sortByCategories(products));
  }, [products]);

  // console.log(products);

  return (
    <div className='product-accordion'>
      {
        categories.map((category, index) => (
          <Accordion
            key={category['Код']}
            TransitionProps={{ timeout: 0 }}
            expanded={expandedPanel === `panel-${index}`}
            onChange={handleAccordionChange(`panel-${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{category['Наименование']}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {expandedPanel === `panel-${index}` && <ProductsTable products={category.products} />}
            </AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  )
}
