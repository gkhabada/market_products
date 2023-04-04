import { useState, useMemo } from 'react'
import { convertByObjKey } from '../utils';

// import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function ScannerCode({ products }) {
  const [code, setCode] = useState();
  const [foundedProduct, setFoundedProduct] = useState({});

  const productsByCode = convertByObjKey('ШтрихКод', products);

  const getProductByCode = useMemo(() => (productsByCode[code] || {}), [products]);
  // {getProductByCode['ШтрихКод']}

  // const [data, setData] = useState("Not Found");

  return (
    <div>
      Сканировать штрих код

      {/* <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else {
            console.log(err);
            console.log(result);
            setData("Not ");
          }
        }}
      />
      <p>{data}</p> */}
    </div>
  )
}
