import path from 'path';
import fs from 'fs';

const UD_FILE = path.resolve(__dirname, './unitData.json'); //将./unitData.json解析为绝对路径

export function getData() {
    return new Promise((resolve, reject) => {
        fs.readFile(UD_FILE, (err,data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(JSON.parse(data));
        })
    })
};

export function setData(data) {
  return new Promise(((resolve, reject) => {
      fs.writeFile(UD_FILE, JSON.stringify(data), (err, data) => {
          if (err) {
              reject(err);
              return;
          }
          resolve(data);
      })
  }))
};