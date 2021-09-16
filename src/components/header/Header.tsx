import React from 'react';
import Logo from '../../assets/images/logo.svg';
import { Typography, Dropdown, Menu, Button, Input, Layout } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import styles from './Header.module.css';
export const Header: React.FC = () => {
    const menu = (
        <Menu>
          <Menu.Item key="1">
            中文
          </Menu.Item>
          <Menu.Item key="2">
            English
          </Menu.Item>
        </Menu>
      );
return <div className={styles['app-header']}>
    {/* topHeader */}
  <div className={`${styles['top-header']}`}>
   <div className={styles.inner}>
      <div>
        <Typography.Text style={{marginRight:'10px'}}>让旅游更幸福</Typography.Text>
        <Dropdown.Button icon={<GlobalOutlined />} overlay={menu}>
          语言
        </Dropdown.Button>
      </div>
      <Button.Group>
        <Button>登录</Button>
        <Button>注册</Button>
      </Button.Group>
   </div>
    </div>
    {/* header */}
  <Layout.Header className={styles['main-header']}>
    <img src={Logo} alt="" className={`${styles['App-logo']}`} />
    <Typography.Title level={3} className={styles.title}>仿携程旅游网</Typography.Title>
    <Input.Search className={styles['search-input']} placeholder={`请输入旅游目的地、景区、城市`} />
  </Layout.Header>
  {/* nav部分 */}
  <Menu mode={"horizontal"} className={`${styles['main-menu']}`}>
    <Menu.Item key="1">旅游首页</Menu.Item>
    <Menu.Item key="2">周末游</Menu.Item>
    <Menu.Item key="3">跟团游</Menu.Item>
    <Menu.Item key="4">自由行</Menu.Item>
    <Menu.Item key="5">私家团</Menu.Item>
    <Menu.Item key="6">邮轮</Menu.Item>
    <Menu.Item key="7">酒店+景点</Menu.Item>
    <Menu.Item key="8">当地玩乐</Menu.Item>
    <Menu.Item key="9">主题游</Menu.Item>
    <Menu.Item key="10">定制游</Menu.Item>
    <Menu.Item key="11">游学</Menu.Item>
    <Menu.Item key="12">签证</Menu.Item>
    <Menu.Item key="13">企业游</Menu.Item>
    <Menu.Item key="14">高端游</Menu.Item>
    <Menu.Item key="15">爱玩户外</Menu.Item>
    <Menu.Item key="16">保险</Menu.Item>
  </Menu>
  </div>
}