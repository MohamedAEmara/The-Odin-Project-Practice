const express = require('express');
const app = express();

const a_middleware_function = function(req, res, next) {
    // preform some operations..
    next();     // call next() so Express will call the next middleware function in the chain.
}



// // function added with use() for all routes and verbs
// app.use(a_middleware_function);


// // function added with use() for a specific route
// app.use('/someroute', a_middleware_function);


// // a middleware function added for a specific HTTP verb and route
// app.get('/', a_middleware_function);

// app.use('/media', express.static('public'));

app.use(function(err, req, res, next) {
    console.error(err.stack);
    console.lo
    res.status(500).send('something broke!!');
});

app.listen(3000);
