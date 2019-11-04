export default function stringToObject(str) {
  /* regex to convert regular object notation to JSON string comes from SO
      https://stackoverflow.com/questions/1086404/string-to-object-in-js */
  const jsonConvertedStr = str.replace(/'/g, '"').replace(/(\w+:)|(\w+ :)/g, matchedStr => {
    return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
  });

  try {
    return JSON.parse(jsonConvertedStr);
  } catch(error) {
    console.log(error);
    return {};
  }
}
