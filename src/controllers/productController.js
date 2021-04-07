// Define a utilização do model cliente e a dependência http-status
const Product = require('../models/product');
const status = require('http-status');

// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const stockQuantity = req.body.stockQuantity;

    // Popula cada um dos campos do model com os campos recebido na request
    Product.create({
        name: name,
        description: description,
        price: price,
        stockQuantity: stockQuantity,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(product => {
            if (product) {
                res.status(status.OK).send(product);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Product.findAll()
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            }
        })
        .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const stockQuantity = req.body.stockQuantity;

    Product.findByPk(id)
        .then(cliente => {
            if (cliente) {
                cliente.update({
                    name: name,
                    description: description,
                    price: price,
                    stockQuantity: stockQuantity,
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Cliente.findByPk(id)
        .then(product => {
            if (product) {
                product.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
