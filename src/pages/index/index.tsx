import React, { Component } from 'react';
import { history } from 'umi';
import styles from './index.less';
import { Button } from 'antd';
// import { connect } from 'dva';
import {
  IndexModelState,
  ConnectRC,
  Loading,
  connect,
  ConnectProps,
} from 'umi';
import ProgramWrapper from '@/components/ProgramWrapper';
const program_list = [
  {
    title: '旅游景点推荐',
    des: 'vue开发的移动端应用',
    href: 'http://travel.kahoul.top/',
  },
  {
    title: '一线生活通',
    des: 'vue开发的移动端应用',
    href: 'http://yixiantong.kahoul.top/',
  },
  {
    title: '手机购物官网',
    des: 'koa框架开发的web端SSR应用',
    href: 'http://xiaomipro.kahoul.top/',
  },
  // {
  //   title: '京东官网',
  //   des: 'koa框架开发的web端SSR应用',
  //   href: 'http://xiaomipro.kahoul.top/',
  // },
];
interface PageProps extends ConnectProps {
  global: IndexModelState;
  loading: boolean;
  index: IndexModelState;
}
// @connect(({ global, index }) => ({
//   global,
//   index,
// }))
class Index extends Component<PageProps> {
  constructor(props: PageProps) {
    super(props);
    this.state = {};
  }
  testClick = () => {
    this.props.dispatch({
      type: 'index/fetchData',
    });
    this.props
      .dispatch({
        type: 'global/setData',
      })
      .then(() => {
        console.log(this.props.global);
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  render() {
    console.log(this.props);
    return (
      <div className={styles.container}>
        {program_list.map((item, index) => {
          return <ProgramWrapper data={item} key={index} />;
        })}

        {/* <Button
          type="primary"
          onClick={() => {
            // history.push('/list');
            this.testClick();
          }}
        >
          {this.props.global.guideStep}
        </Button> */}
      </div>
    );
  }
}

// export default Index;

export default connect(
  ({
    global,
    loading,
    index,
  }: {
    global: IndexModelState;
    loading: Loading;
    index: IndexModelState;
  }) => {
    return {
      global,
      loading,
      index,
    };
  },
)(Index);
