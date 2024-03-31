import { MarketingFlow } from "../models/MarketingFlow";

export const flows: MarketingFlow[] = [
  {
    triggerEvent: "websiteSignup",
    actions: [
      { timeDelay: 1000 }, // 2 hours delay 2 * 60 * 60 * 1000 - i reduced it for testing purposes
      {
        sendEmail: {
          subject: "Welcome!",
          body: "Need some socks?",
        },
      },
    ],
  },
  {
    triggerEvent: "socksPurchased",
    actions: [
      {
        sendEmail: {
          subject: "Payment received",
          body: "Thank you!",
        },
      },
      {
        sendEmail: {
          subject: "Socks dispatched!",
          body: "Get ready!",
        },
      },
    ],
  },
  // Add more marketing flows if needed
];
