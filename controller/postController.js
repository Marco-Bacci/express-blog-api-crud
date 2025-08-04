// importo il file dessert dentro la cartella data
const desserts = require('../data/desserts.js')
// definizione delle funzioni 
// index
const index = (req, res) => {
  res.json(desserts)
}
// show 
const show = (req, res) => {
  const { id } = req.params;
  res.send(`dettaglio del post con id ${id}`)
}
// create
const store = (req, res) => {
  res.send('creazione di un nuovo post')
}
// update
const update = (req, res) => {
  const { id } = req.params;
  res.send(`modifica del post con id ${id}`)
}
// delete
const destroy = (req, res) => {
  const { id } = req.params;
  res.send(`cancellazione del post con id ${id}`)
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
}
