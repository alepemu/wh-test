import { Request, Response, NextFunction } from "express";
import { ZodIssue, ZodTypeAny, z } from "zod";

export function validate(schema: ZodTypeAny) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req);
      next();
    } catch (error) {
      {
        const errorMessage = error.errors.map((issue: ZodIssue) => ({
          message: `${issue.path.join(".")} is ${issue.message}`,
        }));
        res
          .status(400)
          .json({ message: `Invalid input: ${errorMessage[0].message}` });
      }
    }
  };
}

export const createUserFields = z
  .object({
    body: z.object({
      username: z.string(),
      password: z.string(),
    }),
  })
  .required();
