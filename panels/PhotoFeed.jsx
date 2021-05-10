import React from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card';
import { colors, breakPoints } from '../utils/theme';

const PhotoFeed = ({ list }) => (
  <>
    <div className="container">
      <div className="wrapper">
        <ul className="list">
          {list.map((item, index) => (
            <li className="item" key={item.title + item.author_id + index}>
              <Card item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 20px;
      }
      .wrapper {
        max-width: 1000px;
        margin: 0 auto;
      }
      .list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: calc(100% - 40px);
        max-width: calc(100% - 40px);
        margin: 10px;
        background-color: ${colors.white};
        border: 1px solid ${colors.black};
        border-radius: 4px;
      }

      @media (min-width: ${breakPoints.small}px) {
        .list {
          justify-content: center;
        }
        .item {
          flex-basis: calc(50% - 40px);
          max-width: calc(50% - 40px);
        }
      }
      @media (min-width: ${breakPoints.medium}px) {
        .list {
          justify-content: flex-start;
        }
        .item {
          flex-basis: calc(33.33% - 40px);
          max-width: calc(33.33% - 40px);
        }
      }
    `}</style>
  </>
);

PhotoFeed.propTypes = {
  list: PropTypes.arrayOf(
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
};

export default PhotoFeed;
