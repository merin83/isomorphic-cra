import { createReactAppExpress } from '@cra-express/core';
import { getInitialData } from '@cra-express/router-prefetcher';
import routes from '../src/routes';
const path = require('path');
const React = require('react');
const { StaticRouter } = require('react-router');

const { default: App } = require('../src/App');
const clientBuildPath = path.resolve(__dirname, '../client');
let AppClass = App;
let serverData;
const app = createReactAppExpress({
  clientBuildPath,
  universalRender: handleUniversalRender,
  onEndReplace(html) {
    //const state = store.getState();
    return html.replace(
      '{{ SCRIPT }}',
      `<script>
        window.__INITIAL_DATA__ = ${JSON.stringify(serverData).replace(
          /</g,
          '\\u003c'
        )};
      </script>`
    );
  },
});

function handleUniversalRender(req, res) {
  const context = {};
  return getInitialData(req, res, routes)
    .then(data => {
      console.log(data, 'any data?');
      serverData = data;
      const app = (
        <StaticRouter location={req.url} context={context}>
          <AppClass routes={routes} initialData={data} />
        </StaticRouter>
      );
      return app;
    })
    .catch(err => {
      console.error(err);
      res.send(500);
    });
}

if (module.hot) {
  module.hot.accept('../src/App', () => {
    App = require('../src/App').default;
    console.log('✅ Server hot reloaded App');
  });
}

export default app;
