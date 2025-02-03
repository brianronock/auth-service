import request from "supertest";
import app from "../app.js";
import { connectTestDB, closeTestDB, clearTestDB } from "./setupTestDB.js";

beforeAll(async () => {
  await connectTestDB();
});

afterAll(async () => {
  await closeTestDB();
});

beforeEach(async () => {
  await clearTestDB();
});

describe("Authentication API Edge Cases", () => {
  it("should return 400 when registering without a name", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ email: "test@example.com", password: "password123" });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message", '"name" is required');
  });

  it("should return 400 when registering without an email", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({ name: "Test User", password: "password123" });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message", '"email" is required');
  });

  it("should return 400 when logging in without a password", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@example.com" });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("message", '"password" is required');
  });

  it("should return 401 for invalid login credentials", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "wrong@example.com", password: "incorrectPassword" });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("message", "Invalid login credentials");
  });
});