process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const strapi = require('@strapi/strapi');

const app = strapi();

app.start();
