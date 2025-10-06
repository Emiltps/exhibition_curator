import type { Express } from "express";
import { app } from "./server.ts";

const PORT = process.env.PORT || 9090;

const server: Express = app;

server.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
