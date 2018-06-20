import React from 'react';
import { Tag } from 'antd/lib';

const getColorFromAlignment = alignment => {
  if (alignment.indexOf('B') !== -1) {
    return 'blue';
  }

  if (alignment.indexOf('M') !== -1) {
    return 'volcano';
  }
};

const BasicInfo = ({ quote, description, alignment, cr }) => (
  <div>
    <div>
      <p>{quote}</p>
      <p>
        <small>
          {description
            .split('\n\n')
            .map((sentence, idx) => <p key={idx}>{sentence}</p>)}
        </small>
      </p>
    </div>
    <div>
      <Tag color={getColorFromAlignment(alignment)}>{alignment}</Tag>
      <Tag>CR {cr}</Tag>
    </div>
  </div>
);

export default BasicInfo;
