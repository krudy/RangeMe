import React from 'react';
import PropTypes from 'prop-type';

import Tag from '../components/Tag';
import { colors, transitions } from '../utils/theme';

const Card = ({ item }) => (
  <>
    <a className="card" href={item.link} target="_blank" rel="noreferrer">
      <div className="imageWrapper">
        <div className="image" />
      </div>
      <div className="imageInfo">
        <div className="title">
          <span className="infoTitle">Title:</span> {item.title}
        </div>
        <div className="author">
          <span className="infoTitle">Author:</span>{' '}
          {item.author.substr(item.author.indexOf(' ') + 1)}
        </div>
        <div className="date">
          <span className="infoTitle">Date:</span>{' '}
          {item.date_taken.split('T')[0]}
        </div>
        <div className="tags">
          <span className="infoTitle">Tags:</span>{' '}
          {item.tags &&
            item.tags.split(' ').map((tag) => (
              <div className="tagWrapper" key={tag}>
                <Tag tag={tag} />
              </div>
            ))}
        </div>
      </div>
    </a>
    <style jsx>{`
      .card {
        text-decoration: none;
        color: ${colors.black};
        display: inline-block;
        width: 100%;
        height: 100%;
      }
      .card:hover .image {
        transform: scale(1.2);
      }
      .imageWrapper {
        height: 220px;
        width: 100%;
        overflow: hidden;
      }
      .image {
        width: 100%;
        height: 220px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background-image: url(${item.media.m});
        background-size: cover;
        background-position: 50% 50%;
        transition: transform ${transitions.hover};
        overflow: hidden;
      }
      .imageInfo {
        padding: 10px;
        font-size: 14px;
        color: ${colors.cloudBurst};
      }
      .imageInfo > div {
        margin-bottom: 5px;
      }
      .infoTitle {
        font-weight: 600;
        font-size: 16px;
        color: ${colors.black};
      }
      .tagWrapper {
        display: inline-block;
        margin-bottom: 5px;
      }
      .tagWrapper + .tagWrapper {
        margin-left: 5px;
      }
    `}</style>
  </>
);

Card.propTypes = {
  item: PropTypes.shape({
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
};

export default Card;
