import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import PreLoader from '../Layout/PreLoader';
import { getLogs } from '../../Actions/LogAction';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  // const getLogs = async () => {
  //   setLoading(true);

  //   const res = await fetch('/logs');
  //   const data = await res.json();

  //   setLogs(data);
  //   setLoading(false);
  // };

  if (loading || logs === null) return <PreLoader />;

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Developer Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>There are no logs to dispaly.</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
