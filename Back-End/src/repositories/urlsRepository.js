import { query } from "../config/db.js";

export const urlsRepository = {
    async create (original_url, short_code){

        const sql = `INSERT INTO urls (original_Url, short_code)
        VALUES($1, $2)
        RETURNING *;`;
        const res = await query(sql,[original_url, short_code]);
        return res.rows[0]
    },


    async findById(short_code) {
        const sql = `SELECT * FROM urls WHERE short_code = $1`;
        const res = await query (sql, [short_code]);
        return res.rows[0]
    },


    async update (short_code) {
        const sql = `UPDATE urls SET clicks = clicks +1 
        WHERE short_code = $1;`;
        const res = await query (sql, [short_code])
        return res.rows[0];
    },
 
}