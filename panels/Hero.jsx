import React from 'react';

import { colors } from '../utils/theme';

const Hero = ({ title, description, link, date }) => (
  <>
    <div className="container">
      <div className="wrapper">
        <h1>
          <a className="title" href={link} target="_blank">
            {title}
          </a>
        </h1>
        <p className="date">
          <span className="infoTitle">Last Update:</span>{' '}
          {date.split('T').join(' ').split('Z').join(' ')}
        </p>
        <p className="description">{description}</p>
      </div>
    </div>
    <style jsx>{`
      .container {
        padding: 20px;
      }
      .wrapper {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
      }
      .title {
        text-decoration: none;
        color: ${colors.white};
      }
      .date {
        color: ${colors.white};
      }
      .infoTitle {
        font-weight: 600;
      }
    `}</style>
  </>
);

export default Hero;
