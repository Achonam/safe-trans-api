import { getUserByRole, UserService } from "../services/user.services.js";

import { seeder } from "src/lib/seeder.js";
import {innnitializeDatabaseConnection} from "../../config/db.config.js"
import * as userService from "../services/user.services.js"

( async () =>
{

    innnitializeDatabaseConnection()
if (seeder["super admins"].length !==0)

{
 if ((await getUserByRole("super admin").length)) {
   console.log("Database seedee");
   
 }   
 for (const user of seeder["super admins"])
 {
    await userService(user);
 }
 console.log("Database seeded succefully");
 process.exit(0)
 
}
    
})();