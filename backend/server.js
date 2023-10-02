import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT;
connectDB();
const app = express();

/*
body parser middleware
These Two line allow us to get email and password
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/*
body parser middleware
These Two line allow us to get email and password
*/

/*
cookie parser middleware
One line allow us to get email and password
*/
app.use(cookieParser());
/*
cookie parser middleware
*/

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
