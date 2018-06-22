const MatSpecCtrl = require('./controllers/MatSpecCtrl')
const AuthCtrl = require('./controllers/AuthCtrl')
const AuthCtrlPolicies = require('./policies/AuthCtrlPolicies')
const MatPropCtrl = require('./controllers/MatPropCtrl')
const MatAreaCtrl = require('./controllers/MatAreaCtrl')

module.exports = (app) => {
  app.get('/getspecs', MatSpecCtrl.index)
  app.get('/getspec/:name', MatSpecCtrl.index)
  app.get('/getnewspecs', MatSpecCtrl.wkindex)
  app.get('/getnewspec/:name', MatSpecCtrl.wkindex)
  app.post('/register', AuthCtrlPolicies.register, AuthCtrl.register)
  app.post('/login', AuthCtrl.login)
  app.get('/getmatprop/:name', MatPropCtrl.index)
  app.get('/getmatarea/:name', MatAreaCtrl.index)
}
