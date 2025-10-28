import mysql from 'mysql2/promise';

export const db = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'come',
    user: 'root',
    password: '',
});