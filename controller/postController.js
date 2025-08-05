// importo il file dessert dentro la cartella data
const desserts = require("../data/desserts.js");
// definizione delle funzioni
// index
const index = (req, res) => {
  // bonus: recupero la chiave
  const tag = req.query.tags;
  console.log(tag);

  let filteredDesserts = desserts;

  if (tag != undefined) {
    filteredDesserts = desserts.filter((item) => item.tags.includes(tag));
  }

  res.json(filteredDesserts);
};
// show
const show = (req, res) => {
  const id = parseInt(req.params.id);
  // metodo find per trovare elemento dell'array attraverso id
  const dessert = desserts.find((item) => {
    return item.id === id;
    // verifico se il dessert non è stato trovato
  });
  if (!dessert) {
    return res
      .status(404)
      .json({ error: "Not Found", message: "Dessert non trovato" });
  }
  res.json(dessert);
};

// create
const store = (req, res) => {
  console.log(req.body);
  // creo il nuovo id
  const newId = desserts[desserts.length - 1].id + 1;

  
  // creo un nuovo oggetto dessert
  const newDessert = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };
  // aggiungo il nuovo dessert alla lista
  desserts.push(newDessert),
  console.log(desserts);
  res.status(201).json(newDessert);
};
// update
const update = (req, res) => {
  const id = parseInt(req.params.id);
  res.send(`modifica del post con id ${id}`);
};
// delete
const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const dessert = desserts.find((item) => item.id === id);
  // console.log(req.params)
  // console.log(dessert)
  // console.log(desserts.indexOf(dessert))
  desserts.splice(desserts.indexOf(dessert), 1);
  if (!dessert) {
    return res
      .status(404)
      .json({ error: "Not Found", message: "Dessert non trovato" });
  }
  res.sendStatus(204);
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
