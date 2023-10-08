const readFile = require('./src/readFile')

// Çalışmaya başlarken bu parametre girilmeli
const fileType = 'gida' // sektör klasör adı
const ozkaynakNo = 6 // Toplam Özkaynağın okunduğu sütun numarası
const toplam = 'TOPLAM ÖZKAYNAKLAR'

// RUN ->
readFile(fileType, ozkaynakNo, toplam)