import { urlsRepository } from "../repositories/urlsRepository.js";

export const urlsService = {
  async create(original_Url) {
    return await urlsRepository.create(original_Url);
  },


  async findById (short_code) {
    const urlExiste = await urlsRepository.findById(short_code);

    if(!urlExiste) {
        throw new Error('URL_NOT_FOUND');
    }
     return urlExiste.original_Url;
  },

};
