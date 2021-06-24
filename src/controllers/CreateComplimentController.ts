import { Request, Response } from "express";
import { CreateComplimentsService } from "../services/CreateComplimentsService";

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_sender, user_receiver, message } = request.body;
    const crateComprimentService = new CreateComplimentsService();

    const compliment = await crateComprimentService.execute({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    return response.json(compliment);
  }
}

export { CreateComplimentController };
