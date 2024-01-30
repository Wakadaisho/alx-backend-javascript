// Small server using express module
import routes from './routes/index';

const express = require('express');

const app = express();
routes(app);

app.listen(1245);

export default app;
