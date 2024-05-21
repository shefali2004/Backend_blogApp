import express  from "express";
// import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import connectDB from "./db.mjs";

connectDB();
const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);

// const PORT = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
