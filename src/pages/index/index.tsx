import React, { Component } from 'react';
import { history } from 'umi';
import styles from './index.less';
import { Button } from 'antd';
import { connect } from 'dva';
import ProgramWrapper from '@/components/ProgramWrapper';
const program_list = [
  {
    title: '去哪儿手机版',
    des: 'vue开发的移动端应用',
    href: 'http://travel.kahoul.top/',
  },
  {
    title: '一线生活通',
    des: 'vue开发的移动端应用',
    href: 'http://yixiantong.kahoul.top/',
  },
  {
    title: '小米官网',
    des: 'koa框架开发的web端SSR应用',
    href: 'http://xiaomipro.kahoul.top/',
  },
  // {
  //   title: '京东官网',
  //   des: 'koa框架开发的web端SSR应用',
  //   href: 'http://xiaomipro.kahoul.top/',
  // },
];
// @connect(({ global }) => ({
//   global,
// }))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.container}>
        {program_list.map((item, index) => {
          return <ProgramWrapper data={item} key={index} />;
        })}
        {/* 
        <Button
          type="primary"
          onClick={() => {
            // history.push('/list');
          }}
        >
          Primary
        </Button> */}
      </div>
    );
  }
}

export default Index;
