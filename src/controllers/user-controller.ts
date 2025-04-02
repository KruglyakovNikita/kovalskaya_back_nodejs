import { z } from "zod";
import ApiError from "../exeptions/api-error";
import { Request, Response, NextFunction } from "express";
import userService from "../services/user-service";

const updateBalanceSchema = z.object({
  userId: z.number().int(),
  amount: z.number().int(),
});

class UserController {
  async updateBalance(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      //В данной реализации упростил и не делал через middleware для одного роута
      const validation = updateBalanceSchema.safeParse(req.body);

      if (!validation.success) {
        throw ApiError.InvalidData();
      }

      const { userId, amount } = req.body;
      const updatedBalance = await userService.updateBalance(userId, amount);

      return res.json({ balance: updatedBalance });
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
