const readFile = require('./src/readFile')

// Çalışmaya başlarken bu parametre girilmeli
const fileType = 'bank' // sektör klasör adı
const ozkaynakNo = 8 // Toplam Özkaynağın okunduğu sütun numarası
const toplam = 'ÖZKAYNAKLAR'

// RUN ->
readFile(fileType, ozkaynakNo, toplam)