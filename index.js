const fs = require('fs');
const http = require('http');
const port = 3000;

fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
    if(err) throw err;

    console.log('success');
});

const requestHandler = (request, response) => {

    response.end('File hello-world.txt created');
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if(err){
        return console.log('oops.. something wrong happened', err);
    }
    console.log(`Server is listening on ${port}`);
});
