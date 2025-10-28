import { db } from '../db.js';

export async function postForm(req, res) {
  const { name, comment } = req.body;

  if (!name || !comment) {
    return res.status(400).json({
      status: 'error',
      message: 'Name and comment are required',
    });
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO users (name, comment) VALUES (?, ?)',
      [name, comment]
    );

    return res.status(201).json({
      status: 'success',
      message: 'Comment saved successfully',
      data: { id: result.insertId, name, comment },
    });
  } catch (err) {
    console.error('DB Error:', err);
    return res.status(500).json({
      status: 'error',
      message: 'Database insert failed',
    });
  }
}