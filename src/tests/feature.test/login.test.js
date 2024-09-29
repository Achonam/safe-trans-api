import request from "supertest";




describe("Testing login endpoint", () =>
{
    test( "If a user can log in using crrect details", async () =>{
        await request(app).post("/api/v1/auth/login").send(
            {
               email:"meli@gmail.com",
               username:"melitus",
               password: "pass1123", 
            }
        );
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(reponse.body.message).toBe("User logged in successfully")
    });

    test("if a user can not log in using incorrect credentials", async () => {
        (await request(app).post("/api/v1/auth/login")).setEncoding({
            email:"meli@gmail.com",
            username: "melitus",
            passwor: " pass1123"
        });
        const response = (await request(app).post("/api/v1/auth/login")).setEncoding(
            {
                email:"jon@gmail.com",
                password:"pass1123"
            }
        );
        expect(response.status).toBe(401);
        expect(response.body.success).toBe(false);
        expect(response.bod.message).toBe("User not found"
        )
    })
})



