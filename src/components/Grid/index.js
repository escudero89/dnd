import React from 'react';
import { Col, Row } from 'antd/lib';

import NpcCard from '../NpcCard';

const getCols = options => {
  const cols = [];
  options.forEach((npc, idx) => {
    cols.push(
      <Col
        key={`col-${idx}`}
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
      >
        <NpcCard {...npc.properties} />
      </Col>
    );
  });
  return cols;
};

const Grid = ({ npcList = [] }) => {
  return <Row gutter={8}>{getCols(npcList)}</Row>;
};

export default Grid;
