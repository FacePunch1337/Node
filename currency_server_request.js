import https from "https"
import path from "path"
import fs from "fs"

const filePath = path.join(".", 'currency.json');

https.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json', (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    fs.writeFileSync(filePath, data);
    console.log('Data saved to file:', filePath);
  });
}).on('error', (err) => {
  console.error(err);
});