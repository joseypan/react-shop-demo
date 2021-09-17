import React from 'react';
import { Row,Col, Typography } from 'antd';
import { Header, Footer, SideMenu, Carousel, ProductCollection,Company } from '../../components';
import { productList1, productList2, productList3 } from "./mockup";
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.css';
export class HomePage extends React.Component{
    render() {
        return <div>
            <Header />
      {/* 中间内容page-content */}
      <div className={styles['page-content']}>
        <Row>
          <Col span={6}><SideMenu /></Col>
          <Col span={18}><Carousel /></Col>
        </Row>
        <ProductCollection title={<Typography.Title level={3}>爆款推荐</Typography.Title>} sideImage={sideImage}
          products={productList1} />
        <ProductCollection title={<Typography.Title level={3}>爆款推荐</Typography.Title>} sideImage={sideImage2}
          products={productList2} />
        <ProductCollection title={<Typography.Title level={3}>爆款推荐</Typography.Title>} sideImage={sideImage3}
          products={productList3} />
        {/* 合作伙伴 */}
        <Company />
      </div>
      <Footer />
        </div>
    }
}
