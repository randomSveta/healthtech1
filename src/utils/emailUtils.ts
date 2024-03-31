import { Email } from "../models/Email";

export const sendEmail = async (email: Email): Promise<boolean> => {
  // Simulate sending email
  // Assume successful most of the time
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Math.random() < 0.95; // 95% chance of success
};
