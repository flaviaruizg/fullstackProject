const express = require('express');
const { singleBook } = require('./../models/books');
const router = express.Router();
const service = require('./../models/books');


const uploadBook = async(req, res) => {
    try {
        const obj = {
            title: req.body.title,
            author: req.body.author

        }
        console.log(obj);
        const result = await service.createBook(obj);
        //esto me devuelve el ultimo ID asique sabemos que numero de consulta es
        res.json({ book: result });
    } catch (error) {
        console.log(error)
        res.sendStatus(500);

    }
}



const allBook = async(req, res) => {
    try {
        const result = await service.getAll();

        res.json({ result });
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}

const bookDelete = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await service.deleteBook(id);
        res.json({ result });
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}

const getSingle = async(req, res, next) => {

    try {
        const { id } = req.params;
        console.log(id);
        const result = await service.singleBook(id);
        console.log(result);
        if (result)
            console.log(result);
        res.json({ book: result });

        res.json({ message: 'book not found' });

    } catch (error) {
        console.log(error);
        res.sendStatus(500);

    }

}

const updateBook = async(req, res, next) => {

    try {
        const { id } = req.params;
        console.log(id);
        const { author, title } = req.body;
        console.log({ author, title });
        const obj = { author, title };
        const result = await service.updateBook(id, obj);
        console.log(result)

        if (result)
            res.json({ book: result });

        res.json({ message: 'book not found' });

    } catch (error) {
        res.sendStatus(500);
    }

}

router.get('/consultasBook', allBook);
router.delete('/delete/:id', bookDelete);
router.post('/', uploadBook);
router.get('/single/:id', getSingle);
router.post('/update/:id', updateBook);

module.exports = router;