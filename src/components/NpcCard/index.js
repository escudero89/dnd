import React from 'react';

import { Card, Icon } from 'antd/lib';

const NpcCard = props => (
  <Card
    cover={props.portrait && <img alt="example" src={props.portrait} />}
    title={props.name}
    actions={[
      <Icon type="setting" />,
      <Icon type="edit" />,
      <Icon type="ellipsis" />
    ]}
  >
    <p>{props.description}</p>
  </Card>
);

export default NpcCard;
