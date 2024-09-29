import { UnauthenticatedError } from "../../lib/error.def.js";



export const authMiddleWare = (req, res, next) => {
  const token = req.header.authorization.split();

  if (!token) throw new UnauthenticatedError("Invalid Or Missing token");

  console.log(token);
  try {
    const user = veriFyToken(token);

    req.user = user;
    return next();
  } catch (error) {
    throw new UnauthenticatedError("Invalid Or Missing Tokrn");
  }
};

export function getOperationType(method) {
  let operation;
  switch (method) {
    case "post":
      operation = "create";
      break;
    case "get":
      operation = "read";
      break;
    case "put":
      operation = "update";
      break;
    case "delete":
      operation = "delete";
      break;
    default:
      operation = "read";
  }
  return operation;
}

export default authMiddleWare;

