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
