import React from 'react';

const AddButton = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn-large waves-effect waves-light modal-trigger  indigo darken-4'
      >
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#developer-list-modal'
            className='btn-floating btn-small  pink darken-4 modal-trigger'
          >
            <i className='small material-icons'>person</i>
          </a>
        </li>
        <li>
          <a
            href='#developer-modal'
            className='btn-floating btn-medium green darken-4 modal-trigger'
          >
            <i className='medium material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddButton;
