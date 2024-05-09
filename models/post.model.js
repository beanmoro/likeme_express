import { pool } from "../database/connection.js";

const all = async () => {
  const query = `
    SELECT * FROM posts 
    ORDER BY likes DESC
    `;
  const { rows } = await pool.query(query);
  return rows;
};

const create = async ({ usuario, url, descripcion }) => {
  const query = {
    text: `
        INSERT INTO posts (usuario, url, descripcion)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
    values: [usuario, url, descripcion],
  };

  const { rows } = await pool.query(query);
  return rows[0];
};

const update = async (id) => {
  const query = {
    text: `
        UPDATE posts
        SET likes = likes + 1
        WHERE id = $1
        RETURNING *
        `,
    values: [id],
  };

  const { rows } = await pool.query(query);
  return rows[0];
};

export const Post = {
  all,
  create,
  update,
};
