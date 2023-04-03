import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());  // parse JSON from HTTP request body

app.listen(process.env.PORT || 4000);
