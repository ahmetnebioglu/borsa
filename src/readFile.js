const readXlsxFile = require('read-excel-file/node')
const fs = require('file-system')
const Sector = require('./sector')

const readFile = (fileType, ozkaynakNo, toplam) => {
  readXlsxFile(`./data/${fileType}/${process.argv[2]}.xlsx`).then((rows) => {
    fs.writeFile(`./output/${fileType}/${process.argv[2]}.json`, JSON.stringify(rows), (err) => console.log(!err ? 'json oluşturma başarılı' : 'json oluşturma başarısız'))
  }).then(() => Sector(fileType, ozkaynakNo, toplam))
}

module.exports = readFile