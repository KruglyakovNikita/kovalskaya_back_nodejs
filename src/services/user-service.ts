import { pgClient } from "../database";
import userRepository from "../repository/user-repository";

class UserService {
  async updateBalance(userId: number, amount: number): Promise<number> {
    return await pgClient.transaction(async (t) => {
      const user = await userRepository.findByIdForUpdate(userId, t);
      const updatedUser = await userRepository.updateUserBalance(
        user,
        amount,
        t
      );
      console.log(updatedUser.balance);

      return updatedUser.balance;
    });
  }
}

export default new UserService();
