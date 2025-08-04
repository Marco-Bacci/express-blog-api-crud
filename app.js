const express = require('express');

const app = express();

const port = 3000;

// importo il file router dei post
const postRouter = require('./routers/posts.js')

// inserisco middleware per file statici
app.use(express.static('public'));

app.get('/', (req, res)=>{
  res.send('Benevenuti nel mio Blog')
})

app.use('/posts', postRouter);


app.listen(port, ()=>{
  console.log(`server in ascolto alla porta ${port}`)
})
