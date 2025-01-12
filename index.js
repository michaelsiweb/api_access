const express = require('express');
const app = express();
 
// Endpoint da API
app.get('/api/gatilho', (req, res) => {
    res.send('bloqueado'); // Altere para "bloqueado" quando necessário
});
 
// Configura a porta
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
