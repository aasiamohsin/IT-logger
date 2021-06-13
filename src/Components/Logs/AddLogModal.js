import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = () => {
  const [message, setMessage] = useState('');
  const [developer, setDeveloper] = useState('');
  const [attention, setAttention] = useState('');

  const onSubmit = () => {
    if (message === '' || developer === '') {
      M.toast({ html: 'Please enter logs.' });
    } else {
      console.log(message, developer, attention);
      setMessage('');
      setDeveloper('');
      setAttention(false);
    }
  };

  return (
    <div id='add-log-modal' className='modal'>
      <div className='modal-content'>
        <h4>Enter Developer Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.message)}
            />
            <label htmlFor='message' className='active'>
              Developer Log
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='developer'
              value={developer}
              className='browser-default'
              onChange={(e) => setDeveloper(e.target.value)}
            >
              <option value='' disabled>
                Select Developer
              </option>
              <option value='Adil Altaf'>Adil Altaf</option>
              <option value='Zia Khan'>Zia Khan</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={() => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-blue btn-flat'
        >
          Submit
        </a>
      </div>
    </div>
  );
};

export default AddLogModal;
