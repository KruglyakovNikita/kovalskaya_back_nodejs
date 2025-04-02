class ApiError extends Error {
  status: number;
  errors: any[];
  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static InvalidData() {
    return new ApiError(400, "Не верный формат данных");
  }
}
export default ApiError;
