import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchLog } from '../../Actions/LogAction';

const SearchBar = ({ searchLog }) => {
  const text = useRef('');

  const onChange = () => {
    searchLog(text.current.value);
  };

  return (
    <nav className='indigo darken-4'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search'
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propType = {
  searchLog: PropTypes.func.isRequired,
};

export default connect(null, { searchLog })(SearchBar);
