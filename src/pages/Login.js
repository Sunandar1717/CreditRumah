import { Card, Form, Input, Button, Typography, Image, Select, message } from "antd";
import { useHistory } from "react-router";
import { instance } from "../api/instance";

// const { Title } = Typography;
const { Option } = Select;

function Login() {
    const history = useHistory();
    const onLogin = (values) => {
instance.post("/login", {
    username: values.username,
    password: values.password,
    login_as:"a"
}).then(()=> {
   message.success("Login Berhasil") 
   history.push("/home");
}).catch (() => {
    message.error("Login Tidak Berhasil")
});
    };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: "50px",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
      }}
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Bank_BTN_logo.svg/2560px-Bank_BTN_logo.svg.png"
        style={{ width: "300px" }}
      />
      {/* <Title> Bank BTN</Title> */}
      <Card style={{ width: "40vw" }}>
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}

          onFinish ={onLogin}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "masukan username attuh",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "masukan password attuh",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item name="loginType" label="login as">
            <Select defaultValue="Customer">
              <Option value="Customer">Customer</Option>
              <Option value="Agent">Agent</Option>
            </Select>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 1,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
export default Login;
