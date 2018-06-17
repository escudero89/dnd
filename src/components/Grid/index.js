import React from 'react';
import { Col, Row } from 'antd/lib';

import npc from '../../config/npc';
import NpcCard from '../NpcCard';

const CARDS_PER_ROW = 3;

const getCols = options => {
  const cols = [];
  options.forEach((option, idx) => {
    cols.push(
      <Col key={`col-${idx}`} span={8}>
        <NpcCard {...option} />
      </Col>
    );
  });
  return cols;
};

const Grid = () => {
  const rowsMaxQty = Math.ceil(npc.length / CARDS_PER_ROW);
  const rows = [];

  for (let i = 0; i < rowsMaxQty; i++) {
    rows.push(
      <Row key={`row-${i}`} gutter={8}>
        {getCols(npc.slice(i * CARDS_PER_ROW, (i + 1) * CARDS_PER_ROW))}
      </Row>
    );
  }

  return rows;
};

export default Grid;
