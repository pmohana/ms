var seneca = require("seneca")();
var entities = require("seneca-entity");

seneca.quiet();
seneca.use(entities);
seneca.use(require("./cart"));
seneca.use(
  "seneca-amqp-transport"
);
seneca.use("mongo-store", {
  name: "onlinebookdb",
  host: "127.0.0.1",
  port: 27017,
});

seneca.ready(function (err) {
  console.log("server is ready!!!!");
  seneca.listen({  port: 9111 });
});
