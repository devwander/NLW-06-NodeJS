import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class ListTagIdService {
  async execute(id: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tag = await tagsRepositories.find({ where: { id } });

    console.log(tag);

    if (tag.length === 0) {
      throw new Error("Non-existent tag!");
    }

    return tag;
  }
}

export { ListTagIdService };
