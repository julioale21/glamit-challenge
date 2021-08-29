const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});

const PORT = 8000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log("Server is runnig");
});
