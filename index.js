const restify = require(`restify`);

const server = restify.createServer({
  name: `testing`
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());

require(`./routes/default`)(server);

server.listen(3000);
console.log(`Server listening on port 3000`);
