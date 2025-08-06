// definisco il middleware
const errorsHandler = (err, req, res, next) =>{
  console.log(err)
  res.status(500).json({
    error: err.message
  })
}
module.exports = errorsHandler