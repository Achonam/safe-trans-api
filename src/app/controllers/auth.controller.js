import { ValidationError } from "../../lib/error.def.js";
import { CreateUserRequest } from "../requesta/create.user.requset.js"; 
import * as authServices from "../services/auth.service.js";
import { asyncHandler } from "../../lib/async.hanler.js";
import { LoginUserRequest } from "../requesta/login.request.js";




export const registerUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;

  const { errors, value } = validator(CreateUserRequest, req.body);

  if (errors)
    throw new ValidationError(
      " The request failed with the following error",
      errors
    );

  const user = await authServices.registerUser({
    username,
    password,
    email,
  });
  return res.status(201).json({
    success: true,
    message: "User successfully registered",
    data: {
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    },
  });
});

export const loginUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;

  const { errors, values } = validator(LoginUserRequest, req.body);

  if (errors)
    throw new ValidationError(
      " The request failed with following error",
      errors
    );
  const token = username
    ? await authServices.authenticateUser({
        username,
        password,
      })
    : await authServices.authenticateUser( value, req,{ email, password });

  return res.json({
    success: true,
    message: "User logged in succefully",

    authorization: {
      token,
      type: "Bearer",
    },
  });
});



