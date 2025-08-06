const express = require("express");

const app = express();

const port = 3000;

// importo il file router dei post
const postRouter = require("./routers/posts.js");

// importo il middleware
const errorsHandler = require("./middlewares/errorsHandler.js");


// inserisco middleware per file statici
app.use(express.static("public"));

// inserisco il body parser
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Benevenuti nel mio Blog");
});

app.use("/posts", postRouter);

// utilizzo errorsHandler globalmente
app.use(errorsHandler);

app.listen(port, () => {
  console.log(`server in ascolto alla porta ${port}`);
});
