import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import urlsRoutes from "../routes/urlsRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/urls", urlsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


///Primeiro erro para não rodar;

//Ordem das rotas no routes, o express lê de cima para baixo;

//Create;

//FindAll;

//FindbyId;
//---------//

//Segundo erro

//Erros no repositories(Sinal do igual sem o WHERE no sql);

//Colocar parâmetro $ no FindAll, não é necessário. Ex do caso: (SELECT * FROM urls WHERE ID = $1);


//no FindAll, não é neccessário colocar [0] no return. EX do caso: (return res.rows[0]); Deve ser apenas (return res.rows;);


//No FindAll do service, não colocar o retorno no final. Ex do caso:


//async findAll() {
   // const idExiste = await urlsRepositories.findAll();

    //if (!idExiste) {
    //  throw new Error("ID inexistente.");
   // };


   