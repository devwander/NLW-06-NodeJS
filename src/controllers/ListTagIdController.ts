import { Request, Response } from "express";
import { ListTagIdService } from "../services/ListTagIdService";

class ListTagIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listTagIdService = new ListTagIdService();

    const tag = await listTagIdService.execute(id);

    console.log(tag);
    return response.json(tag);
  }
}

export { ListTagIdController };
