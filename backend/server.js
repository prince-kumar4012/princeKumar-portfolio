import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import { seedAdmin } from "./utils/seedAdmin.js";
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

await connectDB();
await seedAdmin();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      process.env.CLIENT_URL,
    ],
    credentials: true,
  })
);


app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.send("Prince Portfolio API running"));
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
