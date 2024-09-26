import innnitializeDatabaseConnection from "./config/db.config.js";
import appConfig from "./config/appp.config.js";
import { server } from "./bootstrap/server.js";




 (() => {
   try {
     innnitializeDatabaseConnection();
     server.listen(appConfig.port, () => {
       console.info(`server is running on port ${appConfig.port}`);
     });
   } catch (error) {
     console.error("Server not found", error);
     process.exit(1);
   }
 })();