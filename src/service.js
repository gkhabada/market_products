import { XMLParser } from 'fast-xml-parser';

export const fetchFileFromYandex = async () => {
  const yaHost = 'https://cloud-api.yandex.net/v1/disk/resources/download';
  const token = 'y0_AgAAAAAXaddKAAmcgQAAAADf5-P34Aa6oIv2RGCNgFfBrQ-gvnlQlxs';
  const fileUrl = 'https://disk.yandex.ru/d/nZQg4BEbCYQg-g';

  const response = await fetch(`${yaHost}?path=${fileUrl}`, {
    method: 'get',
    referrerPolicy: 'no-referrer',
    headers: {
      'content-type': 'text/csv;charset=UTF-8',
      'Authorization': 'OAuth ' + token,
    }
  });

  const products = await response.text();

  return products;
};

export const fetchXmlFile = async () => {
  const options = {
    ignoreAttributes : false,
    attributeNamePrefix : '',
  };

  const response = await fetch('http://localhost:3000/products.xml');
  const products = await response.text();

  const parser = new XMLParser(options);
  const productsJson = parser.parse(products);

  return productsJson['Справочник']['Элемент'];
};

export default {
  fetchFileFromYandex,
  fetchXmlFile,
}
