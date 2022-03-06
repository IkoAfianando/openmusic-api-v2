/* eslint-disable no-console */
const Hapi = require('@hapi/hapi');

const albums = require('./api/albums');
const AlbumServices = require('./services/postgres/AlbumServices');
const AlbumsValidator = require('./validator/albums');

const songs = require('./api/songs');
const SongServices = require('./services/postgres/SongServices');
const SongsValidator = require('./validator/songs');

require('dotenv').config();

const init = async () => {
  const songServices = new SongServices();
  const albumServices = new AlbumServices();

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: albums,
      options: {
        service: albumServices,
        validator: AlbumsValidator,
      },
    },
    {
      plugin: songs,
      options: {
        service: songServices,
        validator: SongsValidator,
      },
    },
  ]);

  await server.start();
  console.log(`Server is running on port ${server.info.uri}`);
};

init();
