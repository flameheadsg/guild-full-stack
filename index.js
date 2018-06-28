const express = require('express');
const app = express();

app.get('/api/', (req, res) => {
  res.send({ APItest: 'successful' });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('guild-client/build'));
  
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'guild-client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
