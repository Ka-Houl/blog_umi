import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { getViewsNum, addViewsNum } from '@/api';

import styles from './index.less';

const View = () => {
  const [viewNum, setViewNum] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    getViewsNum<{ num: number }>()
      .then(res => {
        setViewNum(res.num);
        console.log('res', res);
        addViewsNum();
      })
      .catch(err => {
        console.log('err', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className={styles.wrapper} onClick={() => {}}>
      <div className={styles.content} onClick={() => {}}>
        <Spin spinning={isLoading}>
          <div>浏览数：{viewNum}</div>
        </Spin>
      </div>
    </div>
  );
};

export default View;
