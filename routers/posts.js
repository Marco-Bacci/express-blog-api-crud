const express = require ('express');

const router = express.Router();


// index
router.get('/', (req, res)=>{
  res.send("elenco dei posts")
})
// show
router.get('/:id', (req, res)=>{
  const { id } = req.params;
  res.send(`dettaglio del post con id ${id}`)
})
// create
router.post('/', (req, res)=>{
  res.send ('creazione di un nuovo post')
})
// update
router.put('/:id', (req, res)=>{
  const { id } = req.params;
  res.send(`modifica del post con id ${id}`)
})
// delete
router.delete('/:id', (req, res)=>{
  const { id } = req.params;
  res.send (`cancellazione del post con id ${id}`)
})

module.exports = router;