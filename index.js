require("dotenv").config();

const express = require("express");
const app = express();

const port =process.env.PORT ||5000;
app .use(express.json());
app.use('/tasks',require('./routes/taskRoutes'))


app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});
