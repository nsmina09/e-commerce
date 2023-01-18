const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('port 3000');
});

const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json());

const dataservice = require('./service/dataservice.js');

app.get('/all-products', (req, res) => {
    dataservice.getProducts().then(result => {
        res.status(result.statusCode).json(result);
    })
});

app.post('/add-to-wishlist', (req, res) => {
    dataservice.addToWishList(
        req.body.id,
        req.body.title,
        req.body.image,
        req.body.description,
        req.body.price,
    ).then(result => {
        res.status(result.statusCode).json(result)
    })
})

app.get('/get-wishlist', (req, res) => {
    dataservice.getWishlist().then(result => {
        res.status(result.statusCode).json(result)
    })
})

app.delete('/delete-item/:id', (req, res) => {
    dataservice.deleteItem(req.params.id).then(result => {
        res.status(result.statusCode).json(result);
    })
})



