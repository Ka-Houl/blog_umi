import React from 'react';
import { Tooltip, Divider, Tag } from 'antd';

import styles from './index.less';

export default props => {
  return (
    <div className={styles.tag_box}>
      <div>
        <Tag color="magenta">HTML</Tag>
        <Tag color="red">CSS</Tag>
        <Tag color="volcano">ECMAScript</Tag>
        <Tag color="orange">React</Tag>
        <Tag color="gold">Vue</Tag>
        <Tag color="lime">Node</Tag>
        <Tag color="green">TypeScript</Tag>
        <Tag color="cyan">WebPack</Tag>
        <Tag color="blue">Nuxt</Tag>
        {/* <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag> */}
      </div>
    </div>
  );
};
