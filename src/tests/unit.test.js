import {app} from "../bootstrap/server.js"
import request from "supertest";





describe("Basic application test", () => {
  it("should return 200 and show that the server is up and running", async () => {
    const response = await request(app)
      .get("/health")
      .expect(200)
      .expect("Content-Type", /json/);
    expect(response.body).toEqual({
      success: true,
      message: "The server is up and running",
    });
  });
});
