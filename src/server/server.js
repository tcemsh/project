import "dotenv/config";
import "../database/db.js";
import app from "../app.js";


const PORT = process.env.PORT || 3000;

await app.listen(PORT);
console.log(`http://localhost:${PORT}`);