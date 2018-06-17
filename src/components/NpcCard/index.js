import React from 'react';

import lockr from 'lockr';

import { Card, Icon } from 'antd/lib';
import BasicInfo from './BasicInfo';
import Flavor from './Flavor';
import Stats from './Stats';
import Notes from './Notes';

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

class NpcCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.uploadNpcList);
    const id = props.name;
    this.state = {
      id,
      view: (lockr.get('view') || {})[id] || 'basic',
      properties: props.npc.properties
    };
  }

  getView() {
    switch (this.state.view) {
      case 'basic':
        return <BasicInfo {...this.state.properties} />;
      case 'flavor':
        return <Flavor {...this.state.properties} />;
      case 'stats':
        return <Stats {...this.state.properties} />;
      case 'notes':
        return (
          <Notes
            {...this.state.properties}
            uploadNpcList={this.props.uploadNpcList}
          />
        );
      default:
        return null;
    }
  }

  setView(view) {
    this.setState({ view });
    lockr.set('view', {
      [this.state.id]: view
    });
  }

  render() {
    const { name, portrait, role } = this.state.properties;
    const isBasic = this.state.view === 'basic';

    return (
      <Card
        cover={isBasic && portrait && <img alt="example" src={portrait} />}
        title={name}
        tabList={[
          { key: 'basic', tab: <Icon type="info-circle-o" /> },
          { key: 'flavor', tab: <Icon type="smile-o" /> },
          { key: 'stats', tab: <Icon type="dot-chart" /> },
          { key: 'notes', tab: <Icon type="ellipsis" /> }
        ]}
        activeTabKey={this.state.view}
        onTabChange={key => this.setView(key)}
        style={{ borderColor: getColorFromRole(role) }}
      >
        {this.getView()}
      </Card>
    );
  }
}

export default NpcCard;
