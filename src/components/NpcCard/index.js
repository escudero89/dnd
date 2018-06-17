import React from 'react';

import lockr from 'lockr';

import { Card, Icon } from 'antd/lib';
import BasicInfo from './BasicInfo';
import Flavor from './Flavor';

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

  getIcon(view, icon) {
    return (
      <Icon
        type={icon}
        style={this.state.view === view ? { color: '#1890ff' } : {}}
        onClick={this.setView.bind(this, view)}
      />
    );
  }

  render() {
    const { name, portrait, role } = this.props;

    const isBasic = this.state.view === 'basic';

    return (
      <Card
        cover={isBasic && portrait && <img alt="example" src={portrait} />}
        title={name}
        actions={[
          this.getIcon('basic', 'info-circle'),
          this.getIcon('flavor', 'smile-o'),
          this.getIcon('stats', 'ellipsis')
        ]}
        style={{ borderColor: getColorFromRole(role) }}
      >
        {this.getView()}
      </Card>
    );
  }
}

export default NpcCard;
