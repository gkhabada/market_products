export const convertByObjKey = (key, array) => {
  return array.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {});
}

export default { convertByObjKey };
