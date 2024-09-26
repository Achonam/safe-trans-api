import { NotFoundError, UnauthenticatedError } from "../../lib/error.def.js";
import argon from "argon2";
import * as userService from "./user.services.js";
import { generateAuthenticationToken } from "../provider/jwt.provider.js";



export const registerUser = async (payload) => {
  await userService.createUser(payload);
};

export const authenticateUser = async (payload) => {
  const user = await userService.getUserByEmail(payload.email);

  if (!user)
    throw new NotFoundError(
      "We could not validate your credentials, please try again"
    );

  if (!(await argon.verify(user.password, payload.password)))
    throw new UnauthenticatedError(
      "Verification faild"
    );

  // create the token and set it in the cookie
  return generateAuthenticationToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });
};
