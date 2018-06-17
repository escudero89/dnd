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

    const id = props.name;
    this.state = {
      id,
      view: (lockr.get('view') || {})[id] || 'basic'
    };
  }

  getView() {
    switch (this.state.view) {
      case 'basic':
        return <BasicInfo {...this.props} />;
      case 'flavor':
        return <Flavor {...this.props} />;
      case 'stats':
        return <Stats {...this.props} />;
      case 'notes':
        return <Notes {...this.props} />;
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
    const { name, portrait, role } = this.props;
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
