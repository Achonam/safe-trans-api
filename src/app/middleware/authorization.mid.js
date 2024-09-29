import { UnauthorizedError } from "../../lib/error.def.js";
import { getOperationType, permissions } from "../../lib/utils.js";

export default function authorizationMiddleware(req, res, next) {
  try {
    const user = req.user;
   

    
    const route = req.baseUrl.split("/")[3];

    


   

    let operation = getOperationType(req.method.toLowerCase());
    // check the route being accessed against the routes the user can access
    if (permissions[route][operation].includes(user.role)) {
      return next();
    }

    throw new UnauthorizedError(
      "You don't access to this "
    );
  } catch (error) {
    next(error);
  }
}


