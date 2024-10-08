import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

// db connection settings
connectDB();

const app = express();

app.use(express.json());

// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000", // client's URL
    credentials: true, // Allow credentials (cookies, authorization headers, TLS client certificates)
  })
);

app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);

app.listen(process.env.BACKEND_PORT || 5000, () => {
  console.log("listening on port " + process.env.BACKEND_PORT || 5000);
});

// Error handlers
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
