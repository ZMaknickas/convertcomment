import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { getForm } from './api/getForm.js';
import { postForm } from './api/postForm.js';
import { deleteRow } from './api/deleteForm.js';

const app= express();

app.use(express.json());
app.use(helmet());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5530',
}));
console.log('Page is set on port:','http://localhost:5530')

app.get('/', (req, res) => {
    return res.json({
        status: 'success',
        message: 'server is running',
    });
});

app.get('/api/forms', getForm);
app.post('/api/forms', postForm);
app.delete('/api/forms/:id', deleteRow);


app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).send('Server error');
});

app.get('*error', (req, res) => {
    return res.json({
        status: 'error',
        message: 'No such route',
    });
});


app.listen(5527, ()=>{
    console.log('server running: http://localhost:5527');
})
