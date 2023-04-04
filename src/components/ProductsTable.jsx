import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ProductsTable({ products }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Наименование</TableCell>
            <TableCell>Цена</TableCell>
            <TableCell>Количество</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {products.map((product, index) => (
            <TableRow
              key={product['Код']}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{index + 1}</TableCell>
              <TableCell>{product['Наименование']}</TableCell>
              <TableCell>{product['Цена']}₽</TableCell>
              <TableCell>{product['Остаток']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
