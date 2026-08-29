const net = require('net');

const client = net.createConnection({ port: 3001, host: '127.0.0.1' }, () => {
  console.log('Connected to server!');
  client.end();
});

client.on('error', (err) => {
  console.error('Connection error:', err.message);
});

client.on('close', () => {
  console.log('Connection closed');
});