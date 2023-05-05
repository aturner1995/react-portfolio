import express from 'express';
import path from 'path';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
app.use(express.json());

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/portfolio/build')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})