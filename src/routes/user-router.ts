import { Router } from "express";
import userController from "../controllers/user-controller";

const router = Router();

router.post("/update-balance", userController.updateBalance);

export default router;
