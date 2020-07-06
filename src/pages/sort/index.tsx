import React, { Component } from 'react';
import { history } from 'umi';
import styles from './index.less';

interface listType {
  key: string;
  url: string;
}

interface stateType {
  list: listType[];
}
interface propsType {}

class Index extends Component<propsType, stateType> {
  constructor(props: propsType) {
    super(props);
    this.state = {
      list: [{ key: 'git', url: 'http://blog.kahoul.top/git.html' }],
    };
  }
  onUrlClick = (url: string) => {
    window.open(url);
  };
  render() {
    const { list } = this.state;
    return (
      <div className={styles.wrapper}>
        <ul>
          {list.map(item => {
            return (
              <li
                key={item['key']}
                onClick={() => this.onUrlClick(item['url'])}
                className={styles.list_item}
              >
                {item.key}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Index;
