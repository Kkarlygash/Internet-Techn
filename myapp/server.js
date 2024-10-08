const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
});

app.get('/', async (req, res) => {
    res.send("Қош келдіңіз! Бұл Node.js және Express.js сервері.");
});

app.get('/about', async (req, res) => {
    res.send("Бұл сервер туралы ақпарат беті.");
});

app.get('/async', async (req, res) => {
    const data = await new Promise(resolve => setTimeout(() => resolve("Асинхронды деректер"), 2000));
    res.send('Асинхронды маршрут деректері: ' + data);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Сервер ${port} портында жұмыс жасайды`);
});
