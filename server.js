const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json('App Academy Todo Web App!');
});

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
);
