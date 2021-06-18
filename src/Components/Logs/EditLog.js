import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../Actions/LogAction';

const EditLog = ({ currentLog, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState('');
  const [developer, setDeveloper] = useState('');

  useEffect(() => {
    if (currentLog) {
      setMessage(currentLog.message);
      setDeveloper(currentLog.developer);
      setAttention(currentLog.attention);
    }
  }, [currentLog]);

  const onSubmit = () => {
    if (message === '' || developer === '') {
      M.toast({ html: 'Please enter logs.' });
    } else {
      const updatedLog = {
        id: currentLog.id,
        message,
        developer,
        attention,
        date: new Date(),
      };
      updateLog(updatedLog);
      M.toast({ html: 'Log Updated.' });
      setMessage('');
      setAttention(false);
      setDeveloper('');
    }
  };

  return (
    <div id='edit-log-modal' className='modal'>
      <div className='modal-content'>
        <h4>Enter Developer Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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

EditLog.propTypes = {
  currentLog: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentLog: state.log.currentLog,
});

export default connect(mapStateToProps, { updateLog })(EditLog);
