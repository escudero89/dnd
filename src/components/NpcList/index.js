import React from 'react';
import { Col, Row } from 'antd/lib';
import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  }
];

const NpcList = () => (
  <Row gutter={8} style={{ background: '#fff' }}>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <Col md={12}>
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        </Col>
      )}
    />
  </Row>
);

export default NpcList;
