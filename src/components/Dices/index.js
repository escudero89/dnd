import React from 'react';

import { Col, Row } from 'antd/lib';
import { Input } from 'antd';

const { TextArea } = Input;

const Dices = () => (
  <Col>
    <Row>
      <TextArea rows={4} />
    </Row>
  </Col>
);

export default Dices;
