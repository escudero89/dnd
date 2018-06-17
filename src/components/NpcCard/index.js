import React from 'react';

import { Card, Icon, Tag } from 'antd/lib';

const getColorFromRole = role => {
  switch (role) {
    case 'Ally':
      return '#78d278';
    case 'Enemy':
      return '#c55f5f';
    default:
      return null;
  }
};

const getColorFromAlignment = alignment => {
  if (alignment.indexOf('B') !== -1) {
    return 'blue';
  }

  if (alignment.indexOf('M') !== -1) {
    return 'volcano';
  }
};

const NpcCard = ({
  name,
  portrait,
  quote,
  description,
  role,
  alignment,
  cr
}) => (
  <Card
    cover={portrait && <img alt="example" src={portrait} />}
    title={name}
    actions={[
      <Icon type="setting" />,
      <Icon type="edit" />,
      <Icon type="ellipsis" />
    ]}
    style={{ borderColor: getColorFromRole(role) }}
  >
    <div>
      <p>{quote}</p>
      <p>
        <small>{description}</small>
      </p>
    </div>
    <div>
      <Tag color={getColorFromAlignment(alignment)}>{alignment}</Tag>
      <Tag>CR {cr}</Tag>
    </div>
  </Card>
);

export default NpcCard;
