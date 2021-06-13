import React, { useState, useEffect } from 'react';
import DeveloperItem from './DeveloperItem';

const DevelopersListModal = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDevelopers();
    // eslint-disable-next-line
  }, []);

  const getDevelopers = async () => {
    setLoading(true);

    const res = await fetch('/developer');
    const data = await res.json();

    setDevelopers(data);
    setLoading(false);
  };

  return (
    <div id='developer-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Devloper List</h4>
        <ul className='collection'>
          {!loading &&
            developers.map((developer) => (
              <DeveloperItem key={developer.id} developer={developer} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DevelopersListModal;
