const Hapi = require('@hapi/hapi');
const albums = require('./api/albums');
const AlbumServices = require('./services/postgres/AlbumServices');
const AlbumsValidator = require('./validator/albums');
require('dotenv').config();

const init = async () => {
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

    await server.register({
        plugin: albums,
        options: {
            service: albumServices,
            validator: AlbumsValidator,
        }
    })

    await server.start();
    console.log(`Server is running on port ${server.info.uri}`);
};

init();
