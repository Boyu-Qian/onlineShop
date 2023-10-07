import path from "path";
import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cookieParser from "cookie-parser";
import uploadRoutes from "./routes/uploadRoutes.js";
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

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send({ clientId: process.env.PAYAPL_CLIENT_ID })
);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (res, req) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (res, req) => {
    res.send("API is running...");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
