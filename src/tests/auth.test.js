import request from "supertest";
import app from "../app.js";
import { connectTestDB, closeTestDB, clearTestDB } from "./setupTestDB.js";

let token; // Global variable for token

beforeAll(async () => {
  await connectTestDB();
});

afterAll(async () => {
  await closeTestDB();
});

beforeEach(async () => {
  await clearTestDB(); // Ensure a clean DB state
});

describe("Authentication API", () => {
  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: "test@example.com",
        password: "password123",
      });

    expect(res.statusCode).toBe(201);
    //console.log("✅ Test User Registered via API");
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("token");
  });

  it("should login an existing user", async () => {
    // Ensure user is registered before login
    await request(app).post("/api/auth/register").send({
      name: "Test User",
      email: "test@example.com",
      password: "password123",
    });
    

    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "test@example.com",
        password: "password123",
      });

    //console.log("🔹 Login Response:", res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");

  });
});