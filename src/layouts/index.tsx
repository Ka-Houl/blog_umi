import React from 'react';
import { Menu, Layout, Row, Col, Card } from 'antd';
import { history } from 'umi';
import styles from './index.less';
import Avatar from '@/components/Avatar';
import Skill from '@/components/Skill';
import BackTop from '@/components/BackTop';
import WebInfo from '@/components/WebInfo';
const { Header, Footer, Content } = Layout;
const { Meta } = Card;

export default (props: any) => {
  console.log(props);
  const menu = [
    { key: '/', name: '主页' },
    { key: '/self', name: '个人' },
    { key: '/github', name: 'GitHub' },
  ];
  return (
      <Layout>
        <Header>
          <Row justify={'center'}>
            <Col xs={{ span: 24 }} md={{ span: 16 }} lg={{ span: 10 }}>
              <Menu
                theme="light"
                mode="horizontal"
                // defaultSelectedKeys={['2']}
                selectedKeys={[props.location.pathname]}
                style={{ lineHeight: '64px' }}
                onClick={item => {
                  history.push(item.key);
                }}
              >
                {menu.map(item => (
                  <Menu.Item key={item.key}>{item.name}</Menu.Item>
                ))}
              </Menu>
            </Col>
          </Row>
        </Header>
        <Content>
          <Row justify={'center'} style={{ minHeight: '800px' }}>
            <Col
              // span={22}
              xs={{ span: 22 }}
              md={{ span: 15 }}
              lg={{ span: 14 }}
            >
              {props.children}
            </Col>
            <Col
              //  span={2}
              xs={{ span: 0, offset: 0 }}
              md={{ span: 8, offset: 0 }}
              lg={{ span: 6, offset: 0 }}
            >
              <Avatar />
              <Skill />
            </Col>
          </Row>
          <BackTop />
        </Content>
        <Footer>
          <WebInfo />
        </Footer>
      </Layout>
  );
};
