import React from 'react';

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

export default Tag;
