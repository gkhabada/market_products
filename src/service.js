import { XMLParser } from 'fast-xml-parser';

const parserOptions = {
  ignoreAttributes : false,
  attributeNamePrefix : '',
};

export const fetchFileFromYandex = async () => {
  const yaHost = 'https://cloud-api.yandex.net/v1/disk/public/resources';
  const fileName = 'ExportCatalog.csv';
  // const token = 'y0_AgAAAAAXaddKAAmcgQAAAADf5-P34Aa6oIv2RGCNgFfBrQ-gvnlQlxs';
  const encodeFileUrl = encodeURIComponent('https://disk.yandex.ru/d/nZQg4BEbCYQg-g');

  // ?path=${fileName}&public_key${token}
  const response = await fetch(`${yaHost}?public_key=${encodeFileUrl}&path=/&limit=1000&name=${fileName}}`, {
    method: 'get',
    headers: {
      'content-type': 'text/csv;charset=UTF-8',
      // 'Authorization': 'OAuth ' + token,
    }
  });

  const fileUrl = (await response.json())?.file;

  const responseFile = await fetch(fileUrl);
  const products = await responseFile.text();

  const parser = new XMLParser(parserOptions);
  const productsJson = parser.parse(products);

  return productsJson;
  // return productsJson['Справочник']['Элемент'];
};

export const fetchXmlFile = async () => {
  const response = await fetch('http://localhost:3000/products.xml');
  const products = await response.text();

  const parser = new XMLParser(parserOptions);
  const productsJson = parser.parse(products);

  return productsJson['Справочник']['Элемент'];
};

export default {
  fetchFileFromYandex,
  fetchXmlFile,
}
