import { Request, Response } from "express";
import { executeFlow } from "../flows/flowExecutor";
import { Event } from "../models/Event";
import { flows } from "../flows/index";

const eventController = async (req: Request, res: Response): Promise<void> => {
  try {
    const event: Event = req.body;
    await executeFlow(event, flows);
    res.status(200).send("Flow executed successfully.");
  } catch (error) {
    console.error("Error executing flow:", error);
    res.status(500).send("Internal server error.");
  }
};

export default eventController;
