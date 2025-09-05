const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());

app.get('/api/temperature', (req, res) => {
  res.json({ temperature: Math.round((Math.random() * 70 - 20) * 10) / 10 });
});


app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
  

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
