const MatSpecCtrl = require('./controllers/MatSpecCtrl')

module.exports = (app) => {
  app.get('/', MatSpecCtrl.frontpage)
  app.get('/getspecs', MatSpecCtrl.listAllSpec)
  app.get('/getspec/:name', MatSpecCtrl.listOneSpec)
  app.get('/getnewspecs', MatSpecCtrl.listAllNewSpec)
  app.get('/getnewspec/:name', MatSpecCtrl.listOneNewSpec)
}
