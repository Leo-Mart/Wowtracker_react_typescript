import express from "express";
import characterRoutes from "./routes/characterRoutes.ts";
import { errorHandler } from "./middleware/errorHandler.ts";

const app = express();

app.use(express.json());

//routes
app.use("/api/characters", characterRoutes);

// User errorhandler middleware
app.use(errorHandler);

export default app;
