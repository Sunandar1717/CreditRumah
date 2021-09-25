import { Layout,Menu, Image} from 'antd';
import { HomeOutlined, CreditCardOutlined, LoginOutlined} from '@ant-design/icons';
import { useHistory } from 'react-router';
import logo from "../image/btn.png"

const { Sider, Content } = Layout;

function Container(props){

  const history = useHistory();
    return(
        <Layout style={{minHeight:"100vh"}}>
        <Sider style={{backgroundColor:"white"}}>
            <Image src={logo} 
            style={{ width: "180px", marginTop:"15px" }} />
            <Menu defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => history.push("/home")}>
                Beranda
              </Menu.Item>
              <Menu.Item key="2" icon={<CreditCardOutlined />} onClick={() => history.push("/transaction")}>
                Pengajuan KPR
              </Menu.Item>
              <Menu.Item key="3" icon={<LoginOutlined />}onClick={() => history.push("/login")}>
                Sign Out
              </Menu.Item>
              </Menu>
              </Sider>
                <Layout>
                <Content>{props.children}</Content>
                </Layout>
                </Layout>
      
    );
}
export default Container;