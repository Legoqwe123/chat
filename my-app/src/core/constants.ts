export const defaultUrl = "http://localhost:5000/" || process.env.PUBLIC_URL;

export const validateMsg = {
  required: "Input is required for completions",
  email: {
    notValid: "Not valid email",
  },
  password: {
    length: (num: number): string =>
      `Password must be more than ${num} characters long`,
  },
};

export enum Routes {
  "MAIN" = "/",
  "LOGIN" = "/login",
  "CHAT" = "/chat",
}
