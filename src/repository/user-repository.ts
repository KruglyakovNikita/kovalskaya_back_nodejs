import { Transaction } from "sequelize";
import { User, UserModel } from "../database/models/user";
import UserError from "../exeptions/user-error";

class UserRepository {
  async findByIdForUpdate(
    userId: number,
    transaction: Transaction
  ): Promise<UserModel> {
    const user = await User.findOne({
      where: { id: userId },
      transaction,
      lock: transaction.LOCK.UPDATE,
      raw: false,
    });
    if (!user) {
      throw UserError.NotFound();
    }
    return user;
  }

  async updateUserBalance(
    user: UserModel,
    amount: number,
    transaction: Transaction
  ): Promise<UserModel> {
    if (user.balance + amount < 0) {
      throw UserError.NegaiveBalance();
    }
    user.balance += amount;

    await user.save({ transaction });
    return user;
  }
}

export default new UserRepository();
