import request from "supertest";
import app from "../app";

describe("Event Controller", () => {
  it("should trigger websiteSignup event and execute corresponding marketing flow", async () => {
    const event = {
      eventName: "websiteSignup",
      userEmail: "test@example.com",
    };

    const response = await request(app).post("/api/trigger-event").send(event);

    expect(response.status).toBe(200);
  }, 10000);

  it("should trigger socksPurchased event and execute corresponding marketing flow", async () => {
    const event = {
      eventName: "socksPurchased",
      userEmail: "test@example.com",
    };

    const response = await request(app).post("/api/trigger-event").send(event);

    expect(response.status).toBe(200);
  }, 10000);
});
