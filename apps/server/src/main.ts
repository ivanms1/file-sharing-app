import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const PORT = 3333;

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify();

server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// Start your server
server.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(0);
  }
  console.log(`Server listening at ${address}`);
});
