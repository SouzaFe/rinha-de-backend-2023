import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';

const port = "3333";
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));

server.post("/pessoas", (request, response) => {
    console.log(uuidv4(), request.body);
    response.send("Fez o POST de pessoas");
});

server.get("/pessoas/:id", (request, response) => {
    console.log(request.params);
    response.send("Fez o GET de pessoas com id");
});

server.get("/pessoas", (request, response) => {
    console.log(request.query);
    response.send("Fez o GET de busca");
});

server.get("/contagem-pessoas", (request, response) => {
    response.send("Fez o GET de quantidade de pessoas");
});

server.listen(port, () => {
    console.log(`Servidor ON na porta ${port}.`);
});