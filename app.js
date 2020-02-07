const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>My Node App is Running!</h1>');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
