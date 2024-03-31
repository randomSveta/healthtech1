import { FlowAction } from "./FlowAction";

export interface MarketingFlow {
  triggerEvent: string;
  actions: FlowAction[];
}
