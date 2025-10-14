import request from "supertest";
import { app } from "../src/server.js";

describe("API routes", () => {
  test("GET / should return 200 and a message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toContain("Exhibition Curator Backend is running");
  });

  test("GET /api/artworks should return JSON", async () => {
    const res = await request(app).get("/api/artworks");
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);
  });
});
