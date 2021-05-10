import React from 'react';
import PropTypes from 'prop-types';

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

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

export default MyApp;
