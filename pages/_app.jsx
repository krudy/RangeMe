import React from 'react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>
        {`
          body {
            margin: 0;
            font-family: 'Helvetica Neue', Helvetica, sans-serif;
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
