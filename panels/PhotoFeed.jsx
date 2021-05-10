import React from 'react';

import Card from '../components/Card';
import { colors } from '../utils/theme';

const PhotoFeed = ({ list }) => (
  <>
    <div className="container">
      <div className="wrapper">
        <ul className="list">
          {list.map((item) => (
            <li className="item" key={item.title + item.author_id}>
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
        flex-wrap: wrap;
      }
      .item {
        flex-basis: calc(33.33% - 40px);
        max-width: calc(33.33% - 40px);
        margin: 10px;
        background-color: ${colors.white};
        border: 1px solid ${colors.black};
        border-radius: 4px;
      }
    `}</style>
  </>
);

export default PhotoFeed;
