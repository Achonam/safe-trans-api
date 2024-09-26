import { ValidationError } from "../../lib/error.def.js";
import {asyncHandler} from "../../lib/async.hanler.js";
import { Validator } from "../../lib/validator.js";
import { AuthUserRequest } from "../requesta/login.request.js";
import { CreateUserRequest } from "../requesta/create.user.requset.js";
import * as authService from "../services/auth.service.js"



export const createUserAccount = asyncHandler(async (req, res) => {
  const validator = new Validator();

  const { value, errors } = validator.validate(CreateUserRequest, req.body);

  if (errors)
    throw new ValidationError(
      "The request failed with the following errors",
      errors
    );

  await authService.registerUser(value);

  return res.status(201).json({
    success: true,
    message: "User registered successfully",
  });
});

export const authenticateUser = asyncHandler(async (req, res) => {
  const validator = new Validator();

  const { value, errors } = validator.validate(AuthUserRequest, req.body);

  if (errors)
    throw new ValidationError(
      "The request failed with the following errors",
      errors
    );

  const token = await authService.authenticateUser( value, req );
  
  res.cookie( "authentication", token );

  return res
    .status(200)
    .json({ success: true, message: "User successfully logged in" });
});

export const getAuthenticatedUser = asyncHandler(async (req, res) => {
  const user = req.user;

  return res.status(200).json({
    success: true,
    message: "User found successfully",
    data: {
      user
    },
  });
});