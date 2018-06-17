import React from 'react';

const Flavor = ({ flavor }) => (
  <div>
    {Object.keys(flavor).map(key => {
      return (
        <div key={key} style={{ display: 'block', marginBottom: '8px' }}>
          <small>{key}</small> {flavor[key]}
        </div>
      );
    })}
  </div>
);

export default Flavor;
