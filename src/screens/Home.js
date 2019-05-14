import React from 'react';
import withSSR from '../components/withSSR';

class Home extends React.Component {
  static getInitialData({ match, req, res }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          article: `
    This text is ALSO server rendered if and only if it's the initial render.
              `,
          currentRoute: match.pathname,
        });
      }, 500);
    });
  }

  render() {
    const { isLoading, article, error } = this.props;
    return (
      <div>
        <h1>Home</h1>
        {isLoading && <div>Loading from client...</div>}
        {error && <div>{JSON.stringify(error, null, 2)}</div>}
        {article && <p>{article}</p>}
      </div>
    );
  }
}

export default withSSR(Home);
