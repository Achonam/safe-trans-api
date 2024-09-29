import { Router } from "express";
import {

  loginUser, registerUser
} from "../app/controllers/auth.controller.js";
import authMiddleware from "../app/middleware/auth.mid.js";
//import { registerUser } from "../app/services/auth.service.js";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", authMiddleware,);

export const authRouter = router;
