import React from 'react';
import { BackTop } from 'antd';
import { MyIcon } from '@/utils';

import styles from './index.css';

export default props => {
  return (
    <BackTop visibilityHeight={50}>
      <MyIcon type="icon-top" className={styles.icon} />
    </BackTop>
  );
};
