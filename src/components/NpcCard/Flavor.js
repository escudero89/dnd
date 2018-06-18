import React from 'react';
import { Tooltip } from 'antd';

import motivators from '../../config/motivators';
import temperaments from '../../config/temperaments';

const tooltipHint = content => (
  <span style={{ cursor: 'pointer', color: '#1890ff' }}>{content}</span>
);

const addBehavior = (key, value) => {
  const cleanValue = value.toLowerCase().substr(0, value.length - 2);
  if (key === 'MOTIVADOR') {
    const motivator = motivators[cleanValue];
    if (motivator) {
      return (
        <Tooltip title={motivator} placement="right">
          {tooltipHint(value)}
        </Tooltip>
      );
    }
  }

  if (key === 'TEMPERAMENTO') {
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
