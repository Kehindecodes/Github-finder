import React, { useState, useContext } from 'react';
// eslint-disable-next-line
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      // passing search user up to app.js
      githubContext.searchUsers(text);
      setText('');
    }
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {/* if the users are displayed show clear button */}
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};
// eslint-disable-next-line
// propsTypes = {
//
//   clearUsers: PropTypes.func.isRequired,
//   showClear: PropTypes.bool.isRequired,
//   setAlert: PropTypes.func.isRequired,
// };
export default Search;
