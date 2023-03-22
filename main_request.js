import http from "http"

function main(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('main');
}

const server = http.createServer((request, response) => {
  if (request.url === '/main') {
    main(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});