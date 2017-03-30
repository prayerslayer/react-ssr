import Express from "express";
import path from "path";
import { Provider } from "react-redux";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import createStore from "../data";
import * as github from "../api/github";
import App from "../client/src/App.jsx";

const server = Express();

server.use(Express.static(path.join(__dirname, "../dist")));

server.get("/", (req, res) => res.status(200).type("text/html").send(
  `
<html>
  <head>
    <title>React SSR</title>
    <script async src="/bundle.js"></script>
  </head>
  <body>
    <main id="app"/>
  </body>
</html>
`
));

// separate SSR endpoint for now
server.get("/:query", (req, res) => {
  const query = req.params.query;
  github.fetchRepos(query).then(repos => {
    const store = createStore({
      query,
      repos
    });
    const context = {};
    const ssrApp = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    );
    const html = `
<html>
  <head>
    <title>React SSR</title>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}
    </script>
    <script async src="/bundle.js"></script>
  </head>
  <body>
    <main id="app">
      ${renderToString(ssrApp)}
    </main>
  </body>
</html>
`;
    res.status(200).type("text/html").send(html);
  });
});

server.listen(process.env.PORT || 3000);
