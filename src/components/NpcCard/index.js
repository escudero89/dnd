import React from 'react';

import Card from 'antd/lib/card';

const NpcCard = props => (
  <Card
    cover={props.portrait && <img alt="example" src={props.portrait} />}
    title={props.name}
  >
    <p>{props.description}</p>
  </Card>
);

export default NpcCard;
