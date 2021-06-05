import React from 'react';
import styles from './index.less';

export default ({ data }) => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        window.open(data.href);
      }}
    >
      <div className={styles.title}>{data.title}</div>
      <div className={styles.des}>{data.des}</div>
    </div>
  );
};
