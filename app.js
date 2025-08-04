const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res)=>{
  res.send('server del mio blog in ascolto')
})

// importo il file router 
const postRouter = require('./routers/posts.js')

app.use('/posts', postRouter);


app.listen(port, ()=>{
  console.log(`server in ascolto alla porta ${port}`)
})
