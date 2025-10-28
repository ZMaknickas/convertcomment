import { db } from '../db.js';

export async function deleteRow(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      status: 'error',
      message: 'ID is required',
    });
  }

  try {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'No record found with that ID',
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Row deleted successfully',
      data: { id },
    });
  } catch (err) {
    console.error('DB Error:', err);
    return res.status(500).json({
      status: 'error',
      message: 'Database delete failed',
    });
  }
}