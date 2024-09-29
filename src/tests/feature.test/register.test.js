import request from "supertest";
import * as userService from "../../app/services/auth.service.js";



//to test register endpoints
describe("Testing the registration endpoints", () =>{
    test("A user can create a new account", async() =>
    {
        const response = (await request(app).post("/api/v1/auth/register")).setEncoding({
            email: "meli@gmail.com",
            username:"melitus",
            password:"pass1123"
        });
        expect(response.status).toBe(201);
        expect(response.body.succes).toBe(true);
        expect(response.body.message).toBe("Registratered successfully")
    });

    test( "A user cannot create account with an existing email or sername", async () =>
    {
     (await request(app).post("/api/v1/register")).setEncoding({
       email: "meli@gmail.com",
       username: "melitus",
       password:"pass1123" 
     });

     const response = await request(app).post("/api/v1/auth/register").send({
       email: "meli@gmail.com",
       username: "melitus",
       password: "pass1123",
     });
     expect(response.status).toBe(409);
     expect(response.body.success).toBe(false);
     expect(response.body.message).toBe("user already exists")
    })
} );








