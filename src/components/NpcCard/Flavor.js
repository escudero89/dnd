import React from 'react';
import { Tooltip } from 'antd';

import motivators from '../../data/motivators';
import temperaments from '../../data/temperaments';

const tooltipHint = content => (
  <span style={{ cursor: 'pointer', color: '#1890ff' }}>{content}</span>
);

const addBehavior = (key, value) => {
  const cleanValue = value.toLowerCase().replace(/[.\s]/g, '');
  if (key === 'MOTIVADOR') {
    const motivator = motivators[cleanValue];
    if (motivator) {
      return (
        <Tooltip title={motivator} placement="right">
          {tooltipHint(value)}
        </Tooltip>
      );
    }
  } else if (key === 'TEMPERAMENTO') {
    const temperament = temperaments[cleanValue];
    if (temperament) {
      return (
        <Tooltip title={temperament} placement="right">
          {tooltipHint(value)}
        </Tooltip>
      );
    }
  }

  return value;
};

const Flavor = ({ flavor }) => (
  <div>
    {Object.keys(flavor).map(key => {
      return (
        <div key={key} style={{ display: 'block', marginBottom: '8px' }}>
          <small>{key}</small> {addBehavior(key, flavor[key])}
        </div>
      );
    })}
  </div>
);

export default Flavor;
