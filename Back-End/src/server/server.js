import express from "express";
import dotenv from "dotenv";
//import cors from "cors";
import urlsRoutes from "../routes/urlsRoutes.js";

dotenv.config();

//app.use(cors());



const app = express();

app.use(express.json());



app.use("/urls", urlsRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
