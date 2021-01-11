const app = require('./app');
//const cors = require("cors");
const http = require('http').createServer(app);

const port = process.env.PORT || 5000;

http.listen(port, () => {
    console.log("Server running  at port",port);
}); 