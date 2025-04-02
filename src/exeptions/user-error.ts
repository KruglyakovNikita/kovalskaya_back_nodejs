class UserError extends Error {
  status: number;
  errors: any[];
  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
  static NotFound() {
    return new UserError(406, "User not found");
  }

  static NegaiveBalance() {
    return new UserError(
      403,
      "Не возможно уменьшить баланс, он не может быть отрицательным"
    );
  }
}
export default UserError;
