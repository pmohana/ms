require( 'seneca' )()
 .quiet()
 //.use("./catalog.js",{message:"Plugin added"})
 .use(require('./catalog'))
 .listen({port:9090})