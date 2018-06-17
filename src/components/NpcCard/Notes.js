import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

class Notes extends React.Component {
  constructor(props) {
    super(props);
    console.log('asdasd', props.uploadNpcList);
    this.state = {
      value: props.notes
    };
  }

  render() {
    return (
      <div>
        <TextArea
          autosize={{ minRows: 4, maxRows: 16 }}
          defaultValue={this.state.value}
          onChange={this.props.uploadNpcList}
        />
      </div>
    );
  }
}

export default Notes;
