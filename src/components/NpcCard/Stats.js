import React from 'react';

const Stats = ({ stats }) => (
  <div>{stats.split('\n\n').map(sentence => <p>{sentence}</p>)}</div>
);

export default Stats;
