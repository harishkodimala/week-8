import exp from 'express'
import { connect } from 'mongoose';
import dotenv from "dotenv";
import { UserApp } from './APIs/UserApi.js';
import cors from 'cors'

dotenv.config();

const app = exp();

app.use(cors({
  origin: "http://localhost:5174",
  credentials: true
}));

// body parser
app.use(exp.json());

// routes
app.use('/user-router', UserApp);

// DB connection
async function connectDB() {
  try {

    await connect(process.env.DB_URL);

    console.log("Database Connected Successfully");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });

  } catch (err) {
    console.log("DB Error:", err);
  }
}

connectDB();

// global error handler
app.use((err, req, res, next) => {

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format"
    });
  }

  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value"
    });
  }

  res.status(500).json({
    message: "Internal Server Error"
  });
});