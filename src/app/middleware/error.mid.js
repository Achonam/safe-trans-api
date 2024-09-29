import {
  BadRequestError,
  ConflictError,
  NotFoundError,
  ServerError,
  TooManyRequestsError,
  UnauthenticatedError,
  UnauthorizedError,
  ValidationError,
} from "../../lib/error.def.js"


export const errorMiddleware= (err, req, res, next) => {
  if (
    err instanceof NotFoundError ||
    err instanceof BadRequestError ||
    err instanceof ConflictError ||
    err instanceof UnauthenticatedError ||
    err instanceof UnauthorizedError ||
    err instanceof TooManyRequestsError ||
    err instanceof ServerError
  ) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
    });
  }

  return res.status(500).json({
    success: false,
    message: err.message,
  });
};
