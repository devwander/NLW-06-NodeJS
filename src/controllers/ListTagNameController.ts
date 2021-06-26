import { Request, Response } from "express";
import { ListTagNameService } from "../services/ListTagNameService";

class ListTagNameController {
  async handle(request: Request, response: Response) {
    const { name } = request.params;

    const listTagNameService = new ListTagNameService();

    const tag = await listTagNameService.execute(name);

    return response.json(tag);
  }
}

export { ListTagNameController };
