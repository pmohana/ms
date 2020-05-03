var seneca = require("seneca")();
var entities = require("seneca-entity");
var order = require("./order");
seneca.quiet();
seneca.use("seneca-amqp-transport");
seneca.use(entities);
seneca.use("mongo-store", {
  name: "onlinebookdb",
  host: "127.0.0.1",
  port: 27017,
});
seneca.use(order);
seneca.ready(function (err) {
  seneca.listen({
    type: "amqp",
    pin: "component: order,action:*",
    url: "amqp://guest:guest@rabbitmq:5672",
  });
});
