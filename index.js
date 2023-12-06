const express = require('express');
const app = express();
const port = 5000;
const axios = require('axios');
const cors = require('cors');
const GATEWAY_SERVER = 'http://localhost:8000'; 

app.set('view engine', 'ejs');
app.use(cors());

// Endpoint para listar todas as votações
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8000/getVotacoes');
        const votacoes = response.data;

        // Renderiza o template EJS com os dados
        res.render('votacoes', { votacoes: votacoes });
    } catch (error) {
        console.error("Erro ao obter votações:", error);
        res.status(500).send("Erro ao obter votações");
    }
});


app.get('/about', (req, res) => {
    res.render('about');
});


// Endpoint para visualizar uma votação específica
app.get('/votacao/:id', (req, res) => {
    const votacaoId = req.params.id;
    // Aqui você adicionará a lógica para buscar e retornar os detalhes da votação específica
    res.send(`Detalhes da votação com ID: ${votacaoId}`);
});


// Endpoint para visualizar uma votação específica
app.get('/votacao1', (req, res) => {
    res.sendFile(__dirname + '/votacao1.html');
});

// Endpoint para visualizar uma votação específica
app.get('/votacao2', (req, res) => {
    res.sendFile(__dirname + '/votacao2.html');
});



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});