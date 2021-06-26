import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class ListTagNameService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tag = await tagsRepositories.find({ where: { name } });

    if (tag.length === 0) {
      throw new Error("Non-existent tag!");
    }

    return tag;
  }
}

export { ListTagNameService };
