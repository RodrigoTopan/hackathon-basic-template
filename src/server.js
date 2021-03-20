import app from "./app";

const { APP_PORT } = process.env;

console.log(`Project starting on ${APP_PORT}`)
app.listen(APP_PORT);
