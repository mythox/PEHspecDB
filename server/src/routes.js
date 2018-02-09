const MatSpecCtrl = require('./controllers/MatSpecCtrl')

module.exports = (app) => {
  app.get('/', MatSpecCtrl.frontpage)
  app.get('/getspec', MatSpecCtrl.listAllSpec)
  app.post('/getspec/:name', MatSpecCtrl.listOneSpec)
}
