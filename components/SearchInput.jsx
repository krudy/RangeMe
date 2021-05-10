import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ handler, setter }) => {
  const [search, setSearch] = useState('');
  return (
    <>
      <input
        className="searchBox"
        type="text"
        name="search"
        value={search}
        onChange={(event) => {
          const inputText = event.target.value;
          setSearch(inputText);
          handler(inputText).then((data) => {
            setter(data);
          });
        }}
      />
      <style jsx>{`
        .searchBox {
          width: 100%;
          border: none;
          height: 30px;
          border-radius: 4px;
          padding: 0 10px;
          font-size: 12px;
        }
      `}</style>
    </>
  );
};

SearchInput.propTypes = {
  handler: PropTypes.func,
  setter: PropTypes.func,
};

export default SearchInput;
