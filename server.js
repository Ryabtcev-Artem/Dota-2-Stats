import express from "express";
import cors from "cors";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url"; // нужно для __dirname в ESM

const app = express();
const PORT = 3000;

// Для ESM-совместимости (__dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Включаем CORS
app.use(cors());

// ✅ Прокси для API (обход CORS)
app.get("/api/heroes", async (req, res) => {
    try {
        const response = await axios.get(
            "https://dota2protracker.com/api/heroes/list"
        );
        res.json(response.data);
    } catch (error) {
        console.error("Ошибка при получении героев:", error);
        res.status(500).json({ error: "Не удалось получить героев" });
    }
});

// ✅ Раздача статики из dist
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath)); // Теперь Express знает, что в /dist лежит HTML/JS/CSS
app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});
// ✅ Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
});
