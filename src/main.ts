import createApp from "./app";

const app = createApp();
const port = process.env.API_PORT;


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
