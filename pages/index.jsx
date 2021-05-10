import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../panels/Hero';
import PhotoFeed from '../panels/PhotoFeed';
import { colors } from '../utils/theme';

const Homepage = ({ response }) => {
  if (!response) return <div>nothing</div>;
  return (
    <>
      <div className="container">
        <Hero
          title={response.title}
          description={response.description}
          date={response.modified}
          link={response.link}
        />
        <div className="divider" />
        <PhotoFeed list={response.items} />
      </div>
      <style jsx>{`
        .container {
          background-color: ${colors.pickledBluewood};
        }
        .divider {
          border-top: 1px solid ${colors.white};
          max-width: 600px;
          margin: 20px auto;
        }
      `}</style>
    </>
  );
};

Homepage.getInitialProps = async () => {
  const res = await fetch(
    'https://www.flickr.com/services/feeds/photos_public.gne?lang=en-us&format=json&nojsoncallback=true',
  );
  const json = await res.json();
  return { response: json };
};

Homepage.propTypes = {
  response: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    modified: PropTypes.string,
    link: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        link: PropTypes.string,
        media: { m: PropTypes.string },
        date_taken: PropTypes.string,
        description: PropTypes.string,
        published: PropTypes.string,
        author: PropTypes.string,
        author_id: PropTypes.string,
        tags: PropTypes.string,
      }),
    ),
  }),
};

export default Homepage;
