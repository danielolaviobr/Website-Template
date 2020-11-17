import { ValidationError } from "yup";

interface Errors {
  path: string;
  message: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = { path: err.path, message: err.message };

  return validationErrors;
}
