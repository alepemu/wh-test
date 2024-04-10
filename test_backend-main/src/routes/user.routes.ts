import { Router } from "express";

import { validate, createUserFields } from "../validation";
import { createUser } from "../controllers/user.controller";

const userRouter = Router();

/**
 * @swagger
 * /create:
 *   post:
 *     tags:
 *      - User
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 default: Username
 *               password:
 *                 type: string
 *                 default: admin123
 *     responses:
 *       201:
 *         description: Created
 *       409:
 *         description: Conflict
 *       4XX:
 *         description: Client error
 *       5XX:
 *         description: Server error
 */
userRouter.post("/create", validate(createUserFields), createUser);

export { userRouter };
