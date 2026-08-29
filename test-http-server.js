const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.on('listening', () => {
  console.log('Test HTTP server listening on port 3001');
});

server.on('connection', (socket) => {
  console.log('New connection from:', socket.remoteAddress, socket.remotePort);
});

server.listen(3001, '0.0.0.0', () => {
  console.log('Test HTTP server listening on port 3001');
});