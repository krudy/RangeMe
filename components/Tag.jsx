import React from 'react';
import PropType from 'prop-type';

import { colors } from '../utils/theme';

const Tag = ({ tag }) => (
  <>
    <div className="tag">{tag}</div>
    <style jsx>{`
      .tag {
        background-color: ${colors.iron};
        padding: 5px;
        border-radius: 4px;
        font-size: 10px;
        word-wrap: anywhere;
      }
    `}</style>
  </>
);

Tag.propTypes = {
  tag: PropType.string,
};

export default Tag;
