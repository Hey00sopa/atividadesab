const express = require('express');
const app = express();

let objetos = [];

app.get('/publicacao', (req, res) => {
    res.json(objetos);
});

app.get('/teste/:id', (req, res) => {
    objetos.push(req.params.id)
    res.send('O id digitado foi: ' + req.params.id);
});

app.post('/teste/:texto', (req, res) => {
    let objetoTeste = {
        texto: req.params.texto,
    }

    objetos.push(req.params.texto)
    res.json(objetoTeste);
});

app.delete('/delete', (req, res) => {
    objetos.pop()
    res.send('Ultimo item deletado');
});

app.listen(3000, () => {
    console.log('Server started');
});
