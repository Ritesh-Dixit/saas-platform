import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("should return Home Route Working", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Home Route Working");
  });
});