import { Typography,Divider,Row,Col } from "antd"
import companyImg1 from '../../assets/images/facebook-807588_640.png';
import companyImg2 from '../../assets/images/follow-826033_640.png';
import companyImg3 from '../../assets/images/icon-720944_640.png';
import companyImg4 from '../../assets/images/microsoft-80658_640.png';
import styles from './Company.module.css';
const companies = [
    { src: companyImg1, title: 'Microsoft' },
    { src: companyImg2, title: 'Youtube' },
    { src: companyImg3, title: 'Ins' },
    {src:companyImg4,title:'Facebook'}
]
export const Company: React.FC = () => {
    return <div className={`${styles.content}`}>
        <Divider orientation="left">
            <Typography.Title level={3}>合作企业</Typography.Title>
        </Divider>
        <Row>
            {companies.map(item => {
                return <Col span={6} key={item.title}>
                <img src={item.src} style={{width: "80%",display: "block",marginLeft: "auto",marginRight: "auto",
              }} alt="" />
            </Col>
            })}
        </Row>
    </div>
}