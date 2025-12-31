import express from "express";
import cors from "cors";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config(); // загружаем переменные из .env

const { Client } = pkg;

async function startServer() {
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
  });

  await client.connect();

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/api/users", async (_req, res) => {
    try {
      const result = await client.query("SELECT * FROM test_users");
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Ошибка запроса к БД" });
    }
  });

  app.listen(5000, () =>
    console.log("Server started at http://localhost:5000")
  );
}

startServer().catch((err) => console.error(err));
