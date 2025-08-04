const express = require ('express');

const router = express.Router();

// importo il controller
const postcontroller = require('../controller/postController.js')


// index
router.get('/', postcontroller.index)
// show
router.get('/:id', postcontroller.show)
// create
router.post('/', postcontroller.store)
// update
router.put('/:id', postcontroller.update)
// delete
router.delete('/:id', postcontroller.destroy)

module.exports = router;