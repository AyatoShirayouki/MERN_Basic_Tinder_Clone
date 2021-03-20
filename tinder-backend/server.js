import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './dbCards.js';

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:rexibexi1@cluster0.ylliu.mongodb.net/tinderdb?retryWrites=true&w=majority`;

//MiddleWares
app.use(express.json());
app.use(Cors());


//Db config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

//API endpoints
app.get("/", (req, res) => res.status(200).send('Hello World!!!'));

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err);
        } else{
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err);
        } else{
            res.status(200).send(data);
        }
    });
});

//Listeners
app.listen(port, () => console.log(`listenong on localhost: ${port}`));