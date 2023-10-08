var fs = require('file-system')

const Sector = (fileType, ozkaynakNo, toplam) => {
  fs.readFile(`./output/${fileType}/${process.argv[2]}.json`, 'utf-8', (err, data) => {
    if (err) {
      return
    }
    hesapla(JSON.parse(data))
  })
  
  const toNumber = (data) => {
    return Number(data.split('.').join(''))
  }
  
  const hesapla = async (data) => {
    let ozkaynak
    let parabirimi

    data.map(row => {
      if (row.join().includes('Sunum Para Birimi')) {
        console.log('sunum para birimi', row[1])
        parabirimi = Number( row[1].split(' ')[0].split('.').join('') )
        isNaN(parabirimi) && (parabirimi = 1)
      }
      if (row.join().includes(toplam)) {
        ozkaynak = row[ozkaynakNo] != null ? toNumber(row[ozkaynakNo]) : 0
      }
    })

    const nesne = {
      title: data[0][0],
      toplam: ozkaynak * parabirimi,
    }
    console.log('nesne', nesne)

    fs.readFile('./bigdata.json', 'utf-8', (err, bigData) => {
      if (err) {
        return
      }
      const oldData = bigData == '' || bigData == null ? [] : JSON.parse(bigData)
      const newData = oldData.concat(nesne)
      console.log(data[0][0])
      let mevcut = false
      oldData.map(({title}) => {
        if (title === data[0][0]) {
          mevcut = true
          console.log('veri zaten mevcut')
          return
        } else {
        }
      })
      if (!mevcut) {
        fs.writeFile('./bigdata.json', JSON.stringify(newData), (err) => {
          console.log(!err ? 'big data ekleme başarılı' : 'big data ekleme başarısız')
        })
      }

      oldData.length == 0 && fs.writeFile('./bigdata.json', JSON.stringify(newData), (err) => {
        console.log(!err ? 'ilk big data oluşturma başarılı' : 'ilk big data oluşturma başarısız')
      })
    })
  }
}

module.exports = Sector