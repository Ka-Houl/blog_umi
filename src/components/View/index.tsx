import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import { getViewsNum, addViewsNum } from '@/api';

import styles from './index.less';

const View = () => {
  const [viewNum, setViewNum] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    // 服务端代码有问题，待排查，不同的接口竞态请求，会相互影响响应体
    setTimeout(() => {
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
    }, 1000);
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
