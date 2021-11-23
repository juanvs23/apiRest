class Server {
  constructor(express) {
    this.app = express();
    this.uses(express.static("public"));
  }
  routes(endpoint, router) {
    this.app.use(endpoint, router);
  }
  sets(key, value) {
    this.app.set(key, value);
  }
  uses(element) {
    this.app.use(element);
  }
  listen(port) {
    this.app.listen(port, () => {
      console.log(`running at ${port} port`);
    });
  }
}
module.exports = Server;
