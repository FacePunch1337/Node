import os from "os";
import fs from "fs";

const info = {
  platform: os.platform(),
  type: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
  cpus: os.cpus(),
};

fs.writeFile('os_info.json', JSON.stringify(info), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('The OS information has been saved to os_info.json file.');
});