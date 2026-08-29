const net = require('net');

const server = net.createServer();

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(4000, '0.0.0.0', () => {
  console.log('Test server listening on port 4000');
  setTimeout(() => {
    server.close();
    console.log('Test server closed');
  }, 5000);
});