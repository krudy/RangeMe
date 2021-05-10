import React from 'react';
import PropTypes from 'prop-types';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

import SearchInput from '../components/SearchInput';
import { colors } from '../utils/theme';

const getByTags = async (inputText) => {
  const res = await fetch(`/api/getByTags?tags=${inputText}`);
  const json = await res.json();
  return json;
};

const debouncedGetByTags = AwesomeDebouncePromise(getByTags, 500);

const Search = ({ setter }) => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <SearchInput handler={debouncedGetByTags} setter={setter} />
          <div className="instructions">
            Search by tags. Add commas between tags to search by multiple tags
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 20px;
        }
        .wrapper {
          max-width: 500px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .instructions {
          color: ${colors.white};
          text-align: center;
          font-size: 14px;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
};

Search.propTypes = {
  setter: PropTypes.func,
};

export default Search;
