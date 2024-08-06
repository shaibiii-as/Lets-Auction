import { Router } from "express";
import authRouter from './auth.route';
import itemRouter from './items.route';
import paymentRouter from './payments.route';
const router = Router();

router.use("/payments", paymentRouter)
router.use("/auth", authRouter)
router.use("/items", itemRouter)

export default router;