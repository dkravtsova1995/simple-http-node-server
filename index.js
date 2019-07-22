const fs = require('fs');
const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
        console.log('success');
    });
    response.end('File hello-world.txt created');
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if(err){
        return console.log('oops.. something wrong happened', err);
    }
    console.log(`Server is listening on ${port}`);
});
