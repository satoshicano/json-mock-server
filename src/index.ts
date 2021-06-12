import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

const PORT = 3000;

server
  .use(jsonServer.rewriter({
    "/api/v1/get_posts": "/posts"
  }))
  .use(middleware)
  .use(router)
  .use(function (req, res, next) {
    if (req.method === 'POST') {
      req.method = 'GET';
    }
    next()
  })
  .listen(PORT, () => console.log('JSON Server is running ${PORT}'));