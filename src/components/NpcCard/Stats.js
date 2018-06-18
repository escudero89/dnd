import React from 'react';

const Stats = ({ stats }) => (
  <div>
    {stats.split('\n\n').map((sentence, idx) => <p key={idx}>{sentence}</p>)}
  </div>
);

export default Stats;
