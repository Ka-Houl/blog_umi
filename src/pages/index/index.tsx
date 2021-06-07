import React, { Component } from 'react';
import { history, IGetInitialProps } from 'umi';
import styles from './index.less';
import { Button, Spin } from 'antd';
// import { connect } from 'dva';
import {
  IndexModelState,
  ConnectRC,
  Loading,
  connect,
  ConnectProps,
} from 'umi';
import View from '@/components/View';
import ProgramWrapper from '@/components/ProgramWrapper';
import { getArticleList } from '@/api';
// import { getViewsNum } from '@/api';
const program_list = [
  {
    name: '旅游景点推荐',
    description: 'vue开发的移动端应用',
    url: 'http://travel.kahoul.top/',
  },
  {
    name: '一线生活通',
    description: 'vue开发的移动端应用',
    url: 'http://yixiantong.kahoul.top/',
  },
  {
    name: '手机购物官网',
    description: 'koa框架开发的web端SSR应用',
    url: 'http://xiaomipro.kahoul.top/',
  },
  // {
  //   title: '京东官网',
  //   description: 'koa框架开发的web端SSR应用',
  //   url: 'http://xiaomipro.kahoul.top/',
  // },
];

type SSRProps = Pick<PageState, 'programList'>;
interface PageProps extends ConnectProps, SSRProps {
  global: IndexModelState;
  loading: boolean;
  index: IndexModelState;
}
// type PageProps = ConnectProps &
//   SSRProps & {
//     global: IndexModelState;
//     loading: boolean;
//     index: IndexModelState;
//   };
interface PageState {
  programList: {
    url: string;
    name: string;
    description: string;
    img?: string;
  }[];
  isProgramListLoading: boolean;
}
// @connect(({ global, index }) => ({
//   global,
//   index,
// }))
class Index extends Component<PageProps, PageState> {
  static getInitialProps = (async ctx => {
    let res = await getArticleList<
      {
        url: string;
        name: string;
        description: string;
        img?: string;
      }[]
    >().then(res => {
      // console.log(res);
      return res;
    });
    return Promise.resolve({
      programList: res,
    });
  }) as IGetInitialProps;
  constructor(props: PageProps) {
    super(props);
    this.state = {
      programList: [],
      isProgramListLoading: false,
    };
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
        // console.log(this.props.global);
      })
      .catch(err => {
        // console.log('err', err);
      });
  };

  /**
   *
   * 获取项目列表
   * @memberof Index
   */
  reqArticleList = () => {
    this.setState({
      isProgramListLoading: true,
    });
    getArticleList<
      {
        url: string;
        name: string;
        description: string;
        img?: string;
      }[]
    >()
      .then(res => {
        // console.log(res);
        if (Array.isArray(res)) {
          this.setState({
            programList: res,
          });
        } else {
          console.warn(121212121221);
          this.reqArticleList();
        }
      })
      .finally(() => {
        this.setState({
          isProgramListLoading: false,
        });
      });
  };
  componentDidMount = () => {};
  render() {
    const { isProgramListLoading } = this.state;
    const { programList } = this.props;
    // console.log(this.props);
    return (
      <div className={styles.container}>
        {/* <div>{JSON.stringify(programList)}</div> */}
        <View />
        {isProgramListLoading ? (
          <div className={styles.spin_wrapper}>
            <Spin />
          </div>
        ) : (
          <>
            {programList &&
              programList.map((item, index) => {
                return <ProgramWrapper data={item} key={index} />;
              })}
          </>
        )}

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
