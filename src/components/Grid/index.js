import React from 'react';
import { Col, Row } from 'antd/lib';

import NpcCard from '../NpcCard';

const getCols = (npcList, uploadNpcList) => {
  const cols = [];
  npcList.forEach((npc, idx) => {
    cols.push(
      <Col
        key={`col-${idx}`}
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
        lg={{ span: 6 }}
      >
        <NpcCard npc={npc} uploadNpcList={uploadNpcList} />
      </Col>
    );
  });
  return cols;
};

const Grid = ({ npcList = [], uploadNpcList }) => {
  return <Row gutter={8}>{getCols(npcList, uploadNpcList)}</Row>;
};

export default Grid;
