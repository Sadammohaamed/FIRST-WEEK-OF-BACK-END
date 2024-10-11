const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, API-gaaga wuu shaqeeyaa!',
        magacyada: ['Ahmed', 'Fatima', 'Abdi'],
        taariikho: ['2024-01-01', '2024-02-02', '2024-03-03']
    });
});

app.listen(port, () => {
    console.log(`App-kaaga wuxuu shaqeynayaa port ${port}`);
});
