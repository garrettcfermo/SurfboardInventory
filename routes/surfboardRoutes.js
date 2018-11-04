const db = require('../models')

module.exports = app => {
  app.get('/surfboards', (req, res) => {
    db.toDos.findAll({})
      .then(r => res.json(r))
      .catch(e => console.log(e))
  })

  app.get('/surfboards/:name', (req, res) => {
    db.toDos.findOne({ where: { name: req.params.name } })
      .then(r => res.json(r))
      .catch(e => console.log(e))
  })

  app.post('/surfboards', (req, res) => {
    db.toDos.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  app.put('/surfboards/:name', (req, res) => {
    db.toDos.update(req.body, { where: { name: req.params.name } })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  app.delete('/surfboards/:name', (req, res) => {
    db.toDos.destroy({ where: { name: req.params.name } })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  app.delete('/surfboards', (req, res) => {
    db.toDos.destroy({ where: {}, truncate: true })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}