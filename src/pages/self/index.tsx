import React from 'react';
import { history } from 'umi';
import { Descriptions } from 'antd';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.wrapper}>
      <Descriptions title="个人信息">
        <Descriptions.Item label="Name">吴家豪</Descriptions.Item>
        <Descriptions.Item label="Telephone">18883993447</Descriptions.Item>
        <Descriptions.Item label="Live">广东，佛山</Descriptions.Item>
        {/* <Descriptions.Item label="Remark">empty</Descriptions.Item> */}
        <Descriptions.Item label="Address">广州市天河区</Descriptions.Item>
      </Descriptions>
    </div>
  );
};
