import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const Notes = ({ notes }) => (
  <div>
    <TextArea autosize={{ minRows: 2, maxRows: 6 }}>{notes}</TextArea>
  </div>
);

export default Notes;
