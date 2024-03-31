import { MarketingFlow } from "../models/MarketingFlow";
import { Event } from "../models/Event";
import { sendEmail } from "../utils/emailUtils";

export const executeFlow = async (
  event: Event,
  flows: MarketingFlow[]
): Promise<void> => {
  const matchingFlow = flows.find(
    (flow) => flow.triggerEvent === event.eventName
  );
  if (matchingFlow) {
    for (const action of matchingFlow.actions) {
      if (action.sendEmail) {
        await sendEmail(action.sendEmail);
      } else if (action.timeDelay) {
        await new Promise((resolve) => setTimeout(resolve, action.timeDelay));
      }
    }
  }
};
