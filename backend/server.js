const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
const users = require('./data/users.json');

app.get('/usuarios', (req, res) => res.json(users));

app.get('/dados/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  user ? res.json(user) : res.status(404).json({ error: 'Usuário não encontrado' });
});

app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
