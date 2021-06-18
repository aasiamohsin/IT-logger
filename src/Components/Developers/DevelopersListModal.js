import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDevelopers } from '../../Actions/DeveloperAction';
import DeveloperItem from './DeveloperItem';

const DevelopersListModal = ({
  developer: { developers, loading },
  getDevelopers,
}) => {
  // const [developers, setDevelopers] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDevelopers();
    // eslint-disable-next-line
  }, []);

  // const getDevelopers = async () => {
  //   setLoading(true);

  //   const res = await fetch('/developer');
  //   const data = await res.json();

  //   setDevelopers(data);
  //   setLoading(false);
  // };

  return (
    <div id='developer-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Devloper List</h4>
        <ul className='collection'>
          {!loading &&
            developers !== null &&
            developers.map((developer) => (
              <DeveloperItem key={developer.id} developer={developer} />
            ))}
        </ul>
      </div>
    </div>
  );
};

DevelopersListModal.propType = {
  developers: PropTypes.object.isRequired,
  getDevelopers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  developer: state.developer,
});

export default connect(mapStateToProps, { getDevelopers })(DevelopersListModal);
