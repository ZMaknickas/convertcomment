import { db } from '../db.js';

export async function getForm(req, res) {
  try {
    const [rows] = await db.execute('SELECT * FROM users ORDER BY id DESC');

    return res.status(200).json({
      status: 'success',
      data: rows,
    });
  } catch (err) {
    console.error('DB Error:', err);
    return res.status(500).json({
      status: 'error',
      message: 'Database fetch failed',
    });
  }
}