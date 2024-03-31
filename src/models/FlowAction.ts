import { Email } from "./Email";

export interface FlowAction {
  sendEmail?: Email;
  timeDelay?: number; // in milliseconds
}
