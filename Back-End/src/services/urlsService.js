import { urlsRepositories } from "../repositories/urlsRepositories.js";

export const urlsService = {
  async create(original_Url) {
    return await urlsRepositories.create(original_Url);
  },

  async findById(short_code) {
    const urlExiste = await urlsRepositories.findById(short_code);

    if (!urlExiste) {
      throw new Error("URL_NOT_FOUND");
    }
    return urlExiste.original_Url;
  },

  async findAll() {
    const idExiste = await urlsRepositories.findAll();

    if (!idExiste) {
      throw new Error("ID inexistente.");
    }
  },
};
