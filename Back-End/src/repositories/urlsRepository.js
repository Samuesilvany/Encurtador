import { query } from "../config/db.js";

export const urlsRepository = {
    async create (original_url, short_code){
        const sql = `INSERT INTO urls (original_Url, short_code)
        VALUES($1, $2)
        RETURNING *;`;
        const [original_url, short_code] = urls
        const res = await query(sql,[original_url, short_code]);
        return res.rows[0]
    },

}