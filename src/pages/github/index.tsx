import React, { Component } from 'react';
import { history } from 'umi';
import styles from './index.less';
import { Button } from 'antd';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <a href="https://github.com/Ka-Houl" target="_blank">
          https://github.com/Ka-Houl
        </a>
      </div>
    );
  }
}

export default Index;
