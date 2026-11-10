import { urlsService } from "../services/urlsService.js"

export const urlsController = {
    async create (req, res) {
        try{
            const urls = await urlsService.create(req.body);

            res.status(201).json(urls);
        }catch(error){
            res.status(500).json({
                erro: error.message
            });
        }
    },


    async findById(req, res) {
        try{
            const urls  =await urlsService.findById(req.params.id);
            res.json(urls);
        }catch(error){
            res.status(404).json({
                erro: error.message
            });
        }
    },
};