const express = require("express");
const mySql = require("mysql2");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage });

const db = mySql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DB
});

app.get("/", (req, res) => {
    res.send("Books server")
})

app.get("/bookstore", (req, res) => {
    const sql = "SELECT * FROM booksalso";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.post("/bookstore", upload.single("cover"), (req, res) => {
    const { title, author, price } = req.body;
    const cover = req.file ? req.file.path : null;

    if (!title || !author) {
        return res.status(400).json("Missing required data");
    }
    const sql = "INSERT INTO booksalso (`title`, `author`, `price`, `cover`) VALUES (?)";
    const values = [title, author, price, cover];
    db.query(sql, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json("Book added successfully!");
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});