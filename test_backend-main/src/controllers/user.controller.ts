import { Request, Response } from "express";
import crypto from "crypto";

import { UserRepo } from "../data-source";
import { User } from "../entity/User.entity";

export const createUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Check if the user already exists
  const existingUser = await UserRepo.findOne({
    where: { username },
  });

  if (existingUser) {
    return res.status(409).send({ message: "El nombre de usuario ya existe" });
  }

  // Add user to the database
  const userData: User = {
    id: crypto.randomUUID(),
    username,
    password: crypto.createHash("sha256").update(password).digest("hex"),
  };

  const user: User = UserRepo.create(userData);
  await UserRepo.save(user);

  return res.status(201).send({ message: "El usuario se creó correctamente" });
};
